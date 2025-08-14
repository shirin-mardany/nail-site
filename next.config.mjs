import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "https://icqvgpldfkxzybfhygaf.supabase.co",
      pathname: "/storage/v1/object/public/**",
    },
  ],
};

export default withFlowbiteReact(nextConfig);