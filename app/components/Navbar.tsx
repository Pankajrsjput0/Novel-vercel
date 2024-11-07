import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
      <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                              <Image
                                          src="https://images.app.goo.gl/CP3wSZ5V3VVbC1ZYA"
                                                      alt="WebNovel Logo"
                                                                  width={40}
                                                                              height={40}
                                                                                          className="mr-2"
                                                                                                    />
                                                                                                              <span className="text-white text-xl font-bold">WebNovel</span>
                                                                                                                      </Link>
                                                                                                                              <div className="space-x-4">
                                                                                                                                        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                                                                                                                                                  <Link href="/profile" className="text-white hover:text-gray-300">Profile</Link>
                                                                                                                                                            <Link href="/search" className="text-white hover:text-gray-300">Search</Link>
                                                                                                                                                                      <Link href="/genres" className="text-white hover:text-gray-300">Genres</Link>
                                                                                                                                                                                <Link href="/my-novels" className="text-white hover:text-gray-300">My Novels</Link>
                                                                                                                                                                                        </div>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                  </nav>
                                                                                                                                                                                                    )
                                                                                                                                                                                                    }