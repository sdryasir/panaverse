import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from './components/Hero'
const inter = Inter({ subsets: ['latin'] })
import CourseModule from './components/CourseModule'
import Tracks from './components/Tracks'
export default function Home() {
  return (
    <div>
      <Hero/>
      <CourseModule/>
      <Tracks/>
    </div>
  )
}
