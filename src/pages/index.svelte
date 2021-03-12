
<script>
	import { onMount } from "svelte";
	import { io } from "socket.io-client";
	import Peer from "peerjs";
	import { params } from '@roxi/routify'
  console.log($params) /** {userId: 123, postId: 456} **/

	const socket = io("ws://localhost:3000");
	let userUidConnected = 1;
	$: uid = userUidConnected;
	
	const myPeer = new Peer(undefined, {
		host: "/",
		port: 3001,
	});

	socket.on("user-disconnect", (userId) => {
		if (peers[userId]) peers[userId].close();
	});

	const peers = {};
	myPeer.on("open", (id) => {
		socket.emit("join room", ROOM_ID, uid);
	});

	const ROOM_ID = "streaming";

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
	onMount(() => {
		const videoGrid = document.getElementById("video-stream");

		const myVideo = document.createElement("video");
		myVideo.muted = true;

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

		const addVideoStream = (video, stream) => {
			video.srcObject = stream;
			video.addEventListener("loadedmetadata", () => {
				video.play();
			});
			videoGrid.append(video);
		};
	});
</script>

<main>
	<div id="video-stream" />
</main>

<style>
	#video-stream {
		display: grid;
		grid-template-columns: repeat(auto-fill, 300px);
		grid-auto-rows: 300px;
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
