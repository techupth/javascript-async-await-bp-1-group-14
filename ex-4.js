// Exercise #4
let  getJohnProfile = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here

async function JohnProfile(){
  const John = await getJohnProfile();
  console.log(John)
}
JohnProfile();