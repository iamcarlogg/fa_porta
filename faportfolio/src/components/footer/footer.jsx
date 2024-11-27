
function Footer() {
  return (
    <footer>
        <div className="flex flex-row justify-around bg-cyanm h-[65px] p-4">
        <div className="flex text-center items-center justify-center">
            <ul className="flex gap-4">
                <li><button onClick={() => window.open('https://www.behance.net/fatimamartinez5', '_blank', 'noopener noreferrer')} className="bg-cyanDark p-2 rounded-lg size-18"><img className="size-6" src="behance.svg"/></button></li>
                <li><button onClick={() => window.open('https://www.tiktok.com/@fatii.13_', '_blank', 'noopener noreferrer')} className="bg-cyanDark p-2 rounded-lg size-18"><img className="size-6" src="tiktok.svg"/></button></li>
                <li><button onClick={() => window.open('https://www.instagram.com/013.fa?igsh=MTlxdjd4cGs3MDR5eA==', '_blank', 'noopener noreferrer')} className="bg-cyanDark p-2 rounded-lg size-18"><img className="size-6" src="insta.svg"/></button></li>
            </ul>
            <a className="px-8 text-white font-medium" href="mailto:famrtnz13@gmail.com">famrtnz13@gmail.com</a>
        </div>
        <div className="w-auto">
            <p className="text-white font-semibold text-right">© 2024 por Fátima Lópezz</p>
        </div>
        </div>
    </footer>
  );
}
export default Footer;