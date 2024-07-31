import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col items-center px-6 py-8">
        <h4 className="font-sans text-sm font-bold uppercase text-primary">
          testimonials
        </h4>
        <h2 className="mt-4 text-center font-sans text-4xl font-semibold">
          I have worked with hundreds of amazing clients
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-3">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam
                delectus nihil. Aut enim doloremque et ipsam.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Leslie Alexander</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Anim sit consequat culpa commodo eu do nisi commodo ut aute
                aliqua. Laborum esse duis tempor consectetur officia mollit
                fugiat. Exercitation qui elit minim minim quis fugiat ex.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Michael Foster</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Consequatur ut atque. Itaque nostrum molestiae id veniam eos
                cumque.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Dries Vincent</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm lg:hidden">
              <p>
                “Excepteur consectetur deserunt id incididunt veniam mollit
                officia sint qui aute duis sit cillum. Reprehenderit fugiat amet
                aliqua in commodo minim sunt laborum.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Lindsay Walton</p>
              </div>
            </div>
          </div>
          <div className="hidden flex-col space-y-8 lg:flex">
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Excepteur consectetur deserunt id incididunt veniam mollit
                officia sint qui aute duis sit cillum. Reprehenderit fugiat amet
                aliqua in commodo minim sunt laborum.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Lindsay Walton</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Distinctio facere aliquam est qui atque sint molestias ad. Fuga
                consequuntur asperiores voluptatum ipsum.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Courtney Henry</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Nam nesciunt dolorem dolor asperiores sint. Incidunt molestiae
                quis deleniti vitae ut in earum delectus iusto.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Tom Cook</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm lg:hidden">
              <p>
                “Distinctio facere aliquam est qui atque sint molestias ad. Fuga
                consequuntur asperiores voluptatum ipsum.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Courtney Henry</p>
              </div>
            </div>
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm lg:hidden">
              <p>
                “Nam nesciunt dolorem dolor asperiores sint. Incidunt molestiae
                quis deleniti vitae ut in earum delectus iusto.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Tom Cook</p>
              </div>
            </div>
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Voluptas quos itaque ipsam in voluptatem est. Iste eos
                blanditiis repudiandae. Earum deserunt enim molestiae ipsum
                perferendis.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Whitney Francis</p>
              </div>
            </div>
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Aliquid dolore praesentium ratione. Cumque ea officia
                repellendus laboriosam. Vitae quod id explicabo non sunt.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Leonard Krasner</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Molestias ea earum quos nostrum doloremque sed. Quaerat quasi
                aut velit incidunt excepturi rerum voluptatem minus harum.”
              </p>
              <div className="mt-6 flex items-center space-x-4 font-semibold">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Floyd Miles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
