import Image from "next/image";
import PostCard from '../components/PostCard';

export default function Home() {
  return (
    <main>
      <h2>Home</h2>
      <PostCard title="some title" author="Mario" />
    </main>
  );
}
