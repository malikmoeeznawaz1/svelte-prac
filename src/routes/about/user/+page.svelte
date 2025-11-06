<script>
    export let data; 
    data = data.users;
</script>

<div class="w-full">
    <p>I am profile page
    </p>

    <div class="w-full gap-4 grid md:grid-cols-8">
        {#each data as user}
            <ul>
                <li>
                    <a href="/about/user/{user.id}">
                        <div class="border-2 border-gray-300 rounded-lg p-4 my-4 cursor-pointer hover:brightness-90 bg-white shadow-md text-center">
                            <p class="text-black">{user.id}</p>
                            <p class="text-black font-normal">{user.firstName}</p>

                        </div>
                    </a>
                </li>
            </ul>
            
        {/each}

</div>
</div>