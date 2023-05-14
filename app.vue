<template>
	<div id="app">
		<NuxtLayout :name="layout">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	const layout = "custom";
</script>
