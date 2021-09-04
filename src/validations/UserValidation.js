
const UserValidation = (values) => {
 const errors ={};
 if (!values.nama || values.nama === "") {
     errors.nama = "nama harus diisi";
 }  
 if (!values.alamat || values.alamat === "") {
    errors.alamat = "alamat harus diisi";
}  
if (!values.umur || values.umur === "") {
    errors.umur = "umur harus diisi";
}  
if (!values.nohp || values.nohp === "") {
    errors.nohp = "nohp harus diisi";
}  

return errors
}  

export default UserValidation
