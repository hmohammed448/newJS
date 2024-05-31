async function fetchData() {
  const formData = new FormData();
  formData.append("title", "complaintSubject");
  formData.append("description", "description");
  formData.append("bill", "billImage.png");
  formData.append("image", "billImage.png");
  formData.append("city", 1);
  formData.append("pin_code", 324006);
  formData.append("product", "Product1");
  formData.append("created_by", 1);
  formData.append("seial_no", 2);
  formData.append("purchase_city", 1);
  formData.append("complaine_to", 1);

  const response = await fetch(
    // "https://hpservice.onrender.com/api/addcomplaine",
    {
      //   method: "POST",
      //   body: formData,
    }
  );
  const data = await response.json();
  console.log(data);
}
fetchData();
