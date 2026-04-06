page.jsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function GraphicsCourseSite() {
const [email, setEmail] = useState("");


const courses = [
{ title: "Beginner Photoshop", level: "Beginner" },
{ title: "Canva Design Mastery", level: "Beginner" },
{ title: "Logo Design From Scratch", level: "Intermediate" },
{ title: "Social Media Flyer Design", level: "Intermediate" }
];


return (


{/* HERO */}
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
className="max-w-5xl mx-auto text-center py-20"
>

Learn Graphics Design From Your Phone



Step-by-step courses to help you become a professional designer and start earning online.


Start Learning
</motion.div>



  {/* COURSES */}
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
    {courses.map((course, i) => (
      <Card key={i} className="bg-white text-black rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
          <p className="mb-4">Level: {course.level}</p>
          <Button>Enroll Now</Button>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* ABOUT */}
  <div className="max-w-4xl mx-auto text-center py-20">
    <h2 className="text-3xl font-bold mb-4">Why Learn From Me?</h2>
    <p className="text-gray-300">
      I teach practical graphic design skills using Canva and Photoshop so you can start freelancing fast.
    </p>
  </div>

  {/* EMAIL CAPTURE */}
  <div className="max-w-xl mx-auto text-center pb-20">
    <h2 className="text-2xl font-bold mb-4">Join Free Design Tips</h2>
    <div className="flex gap-3">
      <input
        className="flex-1 p-3 rounded-xl text-black"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button>Join</Button>
    </div>
  </div>
</div>



);
}

