'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '../firebaseConfig'

const genres = [
  { name: 'Fantasy', image: 'https://images.app.goo.gl/YaFgac1tbx48vpVe9' },
    { name: 'Horror', image: 'https://images.app.goo.gl/PNFkqMVYA28Sj3QQ7' },
      { name: 'Mystery', image: 'https://images.app.goo.gl/8RXi5jjRg1gXpxKFA' },
        { name: 'Adventure', image: 'https://images.app.goo.gl/sbo4Ar2WsEEwAaGb6' },
          { name: 'Romance', image: 'https://images.app.goo.gl/gRk3ocrzm7ozQeaL7' },
            { name: 'Sci-Fi', image: 'https://images.app.goo.gl/SQVMpLYhniWDkNNF9' },
            ]

            export default function Home() {
              const [currentGenre, setCurrentGenre] = useState(0)
                const [homePagePhotos, setHomePagePhotos] = useState({})

                  useEffect(() => {
                      const fetchHomePagePhotos = async () => {
                            const db = getFirestore(app)
                                  const photosSnapshot = await getDocs(collection(db, 'Homepagephoto'))
                                        const photosData = photosSnapshot.docs[0]?.data() || {}
                                              setHomePagePhotos(photosData)
                                                  }

                                                      fetchHomePagePhotos()
                                                        }, [])

                                                          useEffect(() => {
                                                              const timer = setInterval(() => {
                                                                    setCurrentGenre((prev) => (prev + 1) % genres.length)
                                                                        }, 5000)
                                                                            return () => clearInterval(timer)
                                                                              }, [])

                                                                                return (
                                                                                    <main className="container mx-auto px-4 py-8">
                                                                                          <h1 className="text-4xl font-bold mb-8">Welcome to WebNovel</h1>
                                                                                                
                                                                                                      <div className="relative h-96 mb-12">
                                                                                                              <Image
                                                                                                                        src={genres[currentGenre].image}
                                                                                                                                  alt={genres[currentGenre].name}
                                                                                                                                            layout="fill"
                                                                                                                                                      objectFit="cover"
                                                                                                                                                                className="rounded-lg"
                                                                                                                                                                        />
                                                                                                                                                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                                                                                                                                                          <h2 className="text-white text-4xl font-bold">{genres[currentGenre].name}</h2>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                        </div>

                                                                                                                                                                                                              <h2 className="text-2xl font-bold mb-4">Popular Genres</h2>
                                                                                                                                                                                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                                                                                                                                                                                            {genres.map((genre, index) => (
                                                                                                                                                                                                                                      <Link href={`/genres/${genre.name.toLowerCase()}`} key={genre.name} className="relative h-48">
                                                                                                                                                                                                                                                  <Image
                                                                                                                                                                                                                                                                src={genre.image}
                                                                                                                                                                                                                                                                              alt={genre.name}
                                                                                                                                                                                                                                                                                            layout="fill"
                                                                                                                                                                                                                                                                                                          objectFit="cover"
                                                                                                                                                                                                                                                                                                                        className="rounded-lg"
                                                                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                                                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                              <h3 className="text-white text-xl font-bold">{genre.name}</h3>
                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                    </Link>
                                                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                      </main>
                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                        }