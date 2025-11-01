import Image from 'next/image';

export default function Projects() {
	return (
		// Project 1
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">projects</h3>
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/project_1.png"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">fesfes</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
						Ini adalah Project UTS pada semester 4 pada mata kuliah Pemograman Web. disini saya membuat tampilan sederhana
						apabila jika admin masuk kedalam website yang dimana ada tampilan khusus pengguna dan admin, tetapi saya membuat
						hanya untuk tampilan admin saja
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Admin
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Website
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Tampilan
						</span>
					</div>
				</div>
			</div>
			Project 2
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/project_2.png"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">Website Pembelian Smartphone</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
						Ini adalah Project UAS pada semester 4 pada mata kuliah pemograman web. Website ini adalah tempat dimana kita bisa membeli Smartphone versi terbaru dari semua merk. 
						Mulai Dari samsung, xiaomi, oppo, iphone dan lain lain. website ini juga memberikan tampilan 
						yang sangat sederhana dantidak terlalu berwarna agar pencahayaan tidak terlalu terang yang 
						menngakibatkan mata menjadi sakit
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Bussiness
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Strategy
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Smartphone
						</span>
					</div>
				</div>
			</div>
		</section>
		
	);
}
