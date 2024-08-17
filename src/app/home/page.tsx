import { Avatar__profileCircle } from "../ui/components/avatar/avatar_profile-circle";
import { Social__btn } from "../ui/components/social/social__btn";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import MapAddress from "./mapAddress";

export default function Home() {
    return (

        <div className="flex flex-col w-full py-4 items-center justify-center">
            <Avatar__profileCircle />
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-5">Nome da Empresa</h1>
            <span className="text-gray-50 mb-5 mt-3">Algum slogan ou mensagem</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center items-center">
                <section className="bg-white mb-4 w-3/4 py-3 rounded-lg select-none transition-transform hover:scale-105">
                    <a href="#">
                        <p className="text-base md:text-lg">Visite nossa página</p>
                    </a>
                </section>
                <section className="w-3/4">
                    <MapAddress />
                </section>
            </main>

            <footer className="flex justify-center gap-3 my-4">
                <Social__btn url="https://www.otthon.dev">
                    <FaFacebook size={35} color="#FFF" />
                </Social__btn>

                <Social__btn url="https://www.otthon.dev">
                    <FaInstagram size={35} color="#FFF" />
                </Social__btn>
            </footer>
        </div>

    );
}
