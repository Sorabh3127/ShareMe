import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post imag="https://www.treehugger.com/thmb/GPjiQZfyXMsbdakVm-8t2Ww2HxQ=/889x667/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__06__nature-phpoto-day-squirrel-6b50719b524c4ecbb3152a32baa38367.jpg" tit="Sorabh Singh"/>

          <Post imag="https://i.pinimg.com/originals/a4/90/72/a49072e8cb82f8549d64dfcfae97857c.jpg" tit="Saumya Singh"/>

          <Post imag="https://wallpapercave.com/wp/wp4991606.jpg" tit="Bhavi"/>
          <Post imag="https://c0.wallpaperflare.com/preview/169/714/355/beautiful-camera-cute-girl.jpg" tit="Mansi Singh"/>

          <Post imag="https://wallpaperaccess.com/full/4413278.jpg" tit="Omi prakash"/>
          <Post imag="https://browsecat.net/sites/default/files/4k-photography-wallpapers-98442-1017832-7552461.png" tit="Komal"/>

          <Post imag="https://drscdn.500px.org/photo/92890847/m%3D900/v2?sig=1786800bb2513f2675f60c41063a022a3a6e5d5fcfc21f397b5f179934c8ed99" tit="Sonu Yadav"/>
          <Post imag="https://www.imagely.com/wp-content/uploads/2021/08/The-One-Skill-that-Makes-an-Awesome-Photographer.jpg" tit="Shubham Singh"/>
          
        </>
      )}
    </Box>
  );
};

export default Feed;
