export const Form (){
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('dogshit')
    e.preventDefault();
    
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const email = formData.get("email");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    if (res.ok) {
      alert("You're registered!");
    } else {
      const errorData = await res.json();
      alert("Error: " + errorData.error);
    }
}
  
  return(
    <form
  class="mt-4 flex flex-col sm:flex-row items-center gap-4 w-full"
  onSubmit={handleSubmit}
>
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <button
    type="submit"
    class="w-full text-nowrap sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
  >
    Notify Me
  </button>
</form>
    )
}
