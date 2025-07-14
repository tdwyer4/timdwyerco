"use client";

import Layout from "@/app/components/Layout";
import { RiveLoader } from "@/app/components/RiveLoader";

const ColorChanger = () => {
  return (
    <Layout variant="dark">
      <RiveLoader
        filename={"https://cdn.jsdelivr.net/gh/tdwyer4/video-host@f2dc3e0deaa7ee16f7d5ba202421d57f07cddc1e/colorchanger2.riv"}
        stateMachineName="ColorChanger"
      />
        
    </Layout>
  )
}
export default ColorChanger