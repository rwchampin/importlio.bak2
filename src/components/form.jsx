'use client';
import TagInput from "./ui/TagInput";
import { parseUrls } from "@/utils/helpers";
const Form = ({ account, onChange, onSubmit }) => {


    //FN that gets the type of the submitted input
    const getTypeOfSubmittedData = (submittedData) => {
      const type = typeof submittedData;


      // get active inputs value, or values if multiple
      // and send em to the server


    }


    const submit = (e) => {
      e.preventDefault();
      if(e.target.product.value !== '') {
        throw new Error('Sneaky Sneaky, bad bot!');
        return
      }
      const urls = ["https://www.amazon.com/fire-tv-stick-with-3rd-gen-alexa-voice-remote/dp/B08C1W5N87/ref=zg_bs_c_electronics_sccl_3/131-6358916-2323847?pd_rd_w=X1PeV&content-id=amzn1.sym.309d45c5-3eba-4f62-9bb2-0acdcf0662e7&pf_rd_p=309d45c5-3eba-4f62-9bb2-0acdcf0662e7&pf_rd_r=6PCKF7YFSTBDVZ7KV64G&pd_rd_wg=DgIWA&pd_rd_r=878db09d-9254-4696-b468-876a8e2840fc&pd_rd_i=B08C1W5N87&psc=1"]
      const clean_urls = parseUrls(urls);


      fetch('http://localhost:8000/product/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ urls: clean_urls }),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

      // e.target..value = '';
    };
    
  
  return (
    <form className="tag-form" onSubmit={submit}>
      <input type="hidden" name="product" />
      <TagInput />
      <input type="submit" className="py-2 px-3 rounded-lg w-full bg-black font-bold text-center text-gray-400" value="Submit" />
    </form>
  );
};


export default Form;