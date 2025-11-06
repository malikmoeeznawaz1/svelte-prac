<script>
    import { goto } from '$app/navigation';
</script>

<div>
     <p>I am About page</p>
    <button on:click={() => goto('/about/user')} class="border-2 font-normal p-2 cursor-pointer hover:bg-gray-800 border-gray-700 bg-gray-600 text-white rounded-2xl ">Go to User Page</button>
</div>
