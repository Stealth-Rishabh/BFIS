import imagePic from "@/assets/images/webp/imagePic.webp";

export default function PicLayout() {
  return (
    <div className="bg-newRed p-8 flex justify-center flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={imagePic}
          alt="Classroom with colorful bookshelves"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 md:pl-8 text-white">
        <h2 className="text-4xl font-bold mb-4">
          The Place Where You Can Thrive
        </h2>
        <p className="text-sm text-slate-300">
          Brookfield, as the best school in Tricity, prepares children for
          higher education and for a full understanding of subjects through
          building their mental, emotional, social, and physical capabilities.
          In pre-nursery school in Chandigarh, young children learn and play by
          being assisted by professionals in their early years of education.
          Brookfield, the top CBSE schools in Chandigarh/Mohali, offers students
          a simple and easy to understand learning curriculum that makes
          studying enjoyable with the affordable fee structure of Mohali
          schools.
        </p>
      </div>
    </div>
  );
}
