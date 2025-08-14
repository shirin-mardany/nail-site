import React from "react";
import {
  FileInput,
  Label,
  Textarea,
  Checkbox,
  TextInput,
} from "flowbite-react";
import DetailPortfolio from "@/components/portfolio/detailPortfolio";
// array for tags name ----------
const tags = [
  { id: "tag1", name: "Solid Color" },
  { id: "tag2", name: "Simple Design" },
  { id: "tag3", name: "3D Design" },
  { id: "tag4", name: "Disco" },
  { id: "tag5", name: "Frosted" },
  { id: "tag6", name: "Glitter" },
  { id: "tag7", name: "French" },
  { id: "tag8", name: "Ombre" },
  { id: "tag9", name: "foot" },
  { id: "tag10", name: "hand" },
  { id: "tag11", name: "Duster" },
  { id: "tag12", name: "Chrome" },
  { id: "tag13", name: "Candy" },
];

// map through tags to create checkboxes
const tagCheckboxes = tags.map((tag) => (
  <div className="flex items-center gap-2" key={tag.id}>
    <Checkbox id={tag.id} />
    <Label htmlFor={tag.id} className="flex" style={{ color: "black" }}>
      {tag.name}
    </Label>
  </div>
));

export default function Uploud() {
  return (
    <div>
      {/* upload img---------------------------- */}
      <div className="p-2 bg-(--pink-E7CCCC) pb-6">
        <p className="font-black mb-3">upload img :</p>
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>
        </div>
      </div>
      {/* title-------------- */}
      <div className="p-4">
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            style={{ color: "black", fontWeight: "900"}}
          >
            title :
          </Label>
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>

      {/* dec---------------------- */}
      <div className="max-w-md p-4 bg-(--green-C1CFA1)  ">
        <div className="mb-2 block">
          <p className="font-black mb-3">dec :</p>
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required
          rows={3}
        />
      </div>
      {/* tags ---------------------------- */}
      <div
        className="flex max-w-md flex-col gap-2 bg-(--blue-B3C8CF) p-4"
        id="checkbox"
      >
        <p className="font-black mb-3">tags :</p>

        {tagCheckboxes}
      </div>
      {/* price ---------------------------- */}
      <div className="max-w-md p-4 bg-(--green-C1CFA1
        )">
        <div className="mb-2 block">
          <Label
            htmlFor="base"
            style={{ color: "black", fontWeight: "900" }}
          >
            price :
          </Label>
        </div>
        <TextInput id="base" type="text" sizing="md" />
        </div>
      {/* portfolio ---------------------------- */}
      <DetailPortfolio/>
      
    </div>
  );
}
