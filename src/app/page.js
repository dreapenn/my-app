import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{'--image-url': "url('/my-app/public/Website Pictures/backimg.JPG')"}} className='container mx-auto h-screen bg-[image:var(--image-url)] bg-scroll columns-2'>
        <div>
          <div>
            <p className="sticky top-0 left-0 p-4 inline-block text-center lg:space-x-4 border-b text-md font-mono font-semibold tracking-wide text-slate-600 subpixel-antialiased indent-2 rounded-full bg-gray-200">
           Nice to meet you, my name is Andrea Brandt! Welcome to my website
           .&nbsp;
          </p>
          </div>
          <div className="absolute top-0 right-0 inline-block border-b aspect-square align-center text-nowrap text-right text-sm size-cover rounded-full bg-gray-300 font-sans leading-6 break-after-right">
            <a
               className=""
               href=""
               >
              <Image
               src={"/my-app/public/Website Pictures/IMG_3975.JPG"}
               alt="Andrea Brandt"
               className="rounded-full justify-around border-8 lg:size-auto"
               width = {90}
               height={100}/>
               
            </a>
            <p className="font-mono lg:text-base border-8 bg-gray-300 rounded-full text-bold" >by Andrea Brandt</p>
          </div>
        </div>
        <div className="sticky columns-3 bg-transparent top-40 lg:right-40">
        <a>
        <Image
          src={"/my-app/public/Website Pictures/IMG_6503.jpg"}
          alt="Graduation Photo"
          className="rounded-full justify-around border-8 lg:size-auto border-gray-500 hover:border-zinc-50"
          width = {90}
          height={100}/>
        </a>
        <a>
        <Image
          src={"/my-app/public/Website Pictures/IMG_7661.JPG"}
          alt="Hangang River"
          className="rounded-full justify-around border-8 lg:size-auto border-gray-500 hover:border-zinc-50"
          width = {90}
          height={100}/>
        </a>
        <a>
        <Image
          src={"/my-app/public/Website Pictures/IMG_8147.JPG"}
          alt="Amsterdam"
          className="rounded-full justify-around border-8 lg:size-auto border-gray-500 hover:border-zinc-50"
          width={90}
          height={100}/>
        </a>
      </div>
      </div> 
      
      <div className="absolute bottom-10 space-y-4 space-x-4 lg:mx-8 px-px text-left">
         <a
           href="https://www.linkedin.com/in/andrea-brandt-43a155201/"
           className="relative inline-block border-8 left-4 from-zinc-200 dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:static lg:w-auto rounded-xl bg-gray-200"
           rel="noopener noreferrer"
           target="_blank"
         >
           <h2 className={`mb-3 text-2xl font-semibold`}>
             Linkedin{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               -&gt;
             </span>
           </h2>
           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             Find out more information on my background and qualifications!
            </p>
         </a>

         <a
           href="https://github.com/dreapenn"
           className="relative inline-block border-8 left-4 from-zinc-200 dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:static lg:w-auto rounded-xl bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            >
           <h2 className={`mb-3 text-2xl font-semibold`}>
             Github{" "}
             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               -&gt;
             </span>
           </h2>
           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           Come check out my Github!&nbsp; It hosts this website!
           </p>
          </a>

         <a
           href="https://www.linkedin.com/posts/dkliger_computerscience-chatgpt-activity-7131377737054720000-ZYXf?utm_source=share&utm_medium=member_desktop"
           className="relative inline-block border-8 from-zinc-200 dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:static lg:w-auto rounded-xl bg-gray-200"
           target="_blank"
           rel="noopener noreferrer"
           >
            <h2 className={`mb-3 text-2xl font-semibold`}>
             Research{" "}
             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               -&gt;
             </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             Video link of a presentation I gave on an HCI-related research project!
            </p>
          </a>

          <a
           href="https://docs.google.com/document/d/1JVEqokWQWObk9sTQpQ7YQsg1pBQVEFQxUIYHMvaotDE/edit?usp=sharing"
           className="relative inline-block border-8 from-zinc-200 dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:static lg:w-auto rounded-xl bg-gray-200"
           target="_blank"
           rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
             Resume{" "}
             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               -&gt;
             </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
               Link to my resume with full details of my experience & education!
            </p>
          </a>
      </div>
        
    </main>
  );
}
