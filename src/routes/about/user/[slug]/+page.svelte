<script>
  export let data;
  const user = data.user; // now single user object

  console.log(user);
</script>

<div class="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-gray-800">
    <div class="flex flex-col items-center text-center">
      <img
        src={user.image}
        alt={user.firstName}
        class="w-32 h-32 rounded-full border-4 border-indigo-500 mb-4 object-cover"
      />

      <h1 class="text-2xl font-bold mb-1">
        {user.firstName} {user.lastName}
      </h1>
      <p class="text-sm text-gray-500 mb-4">{user.email}</p>

      <div class="grid grid-cols-2 gap-x-4 text-sm text-left w-full">
        <p><span class="font-semibold">Gender:</span> {user.gender}</p>
        <p><span class="font-semibold">Age:</span> {user.age}</p>
        <p><span class="font-semibold">Phone:</span> {user.phone}</p>
        <p><span class="font-semibold">Blood Group:</span> {user.bloodGroup}</p>
        <p><span class="font-semibold">Height:</span> {user.height}</p>
        <p><span class="font-semibold">Weight:</span> {user.weight}</p>
        <p><span class="font-semibold">Eye Color:</span> {user.eyeColor}</p>
        <p><span class="font-semibold">Hair:</span> {user.hair.color} ({user.hair.type})</p>
      </div>

      <div class="mt-6 text-left text-sm w-full">
        <p><span class="font-semibold">Company:</span> {user.company.name}</p>
        <p><span class="font-semibold">Department:</span> {user.company.department}</p>
        <p><span class="font-semibold">Title:</span> {user.company.title}</p>

        <p class="mt-2"><span class="font-semibold">University:</span> {user.university}</p>
        <p class="mt-2">
          <span class="font-semibold">Address:</span>
          {user.address.address}, {user.address.city}, {user.address.state}
        </p>
      </div>

      <div class="mt-6 border-t pt-3 text-xs text-gray-500 w-full">
        <p><span class="font-semibold">IP:</span> {user.ip}</p>
        <p><span class="font-semibold">MAC:</span> {user.macAddress}</p>
        <p><span class="font-semibold">Crypto Wallet:</span> {user.crypto.wallet}</p>
      </div>
    </div>
  </div>
</div>
