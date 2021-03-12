<script>
    import { onMount, beforeUpdate } from "svelte";
    import { io } from "socket.io-client";
    import Peer from "peerjs";
    import { params } from "@roxi/routify";

    onMount(() => {
        const slug = $params.slug;
        const peers = {};

        const socket = io("ws://172.16.0.126:3000");
        //let userUidConnected = 1;
        //$: uid = userUidConnected;
        const videoGrid = document.getElementById("video-stream");

        const myPeer = new Peer(undefined, {
            host: "/",
            port: 3001,
        });

        const myVideo = document.createElement("video");
        myVideo.muted = true;
        const addVideoStream = (video, stream) => {
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
            videoGrid.append(video);
        };
        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                addVideoStream(myVideo, stream);

                myPeer.on("call", (call) => {
                    call.answer(stream);
                    const video = document.createElement("video");

                    call.on("stream", (userVideoStream) => {
                        addVideoStream(video, userVideoStream);
                    });
                });
                socket.on("user-connected", (userId) => {
                    connectToNewUser(userId, stream);
                });
            });

        socket.on("user-disconnect", (userId) => {
            if (peers[userId]) {
                console.log("entro");
                peers[userId].close();
            }
        });

        const ROOM_ID = "streaming";

        myPeer.on("open", (id) => {
            socket.emit("join-room", slug, id);
        });
        const connectToNewUser = (userId, stream) => {
            const call = myPeer.call(userId, stream);
            const video = document.createElement("video");
            call.on("stream", (userVideoStream) => {
                addVideoStream(video, userVideoStream);
            });
            call.on("close", () => {
                video.remove();
            });
            peers[userId] = call;
        };
    });
</script>

<main>
    <div id="video-stream" />
</main>

<style>
    #video-stream {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
    }

    video {
        width: 100%;
        height: 100%;
       
    }
</style>
