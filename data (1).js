/* ==========================================================================
   BioNotes — Shared content data
   This is the single source of truth for Notes, MCQs, Practicals and Papers.
   Every page-specific script (notes.js, mcqs.js, practicals.js, papers.js,
   search.js) reads from these arrays. Edit content here, not in the HTML.
   ========================================================================== */

const NOTES = [
  { tag:'Unit 01', title:'Cell Biology', desc:'Full B.Sc. Biotechnology-level notes on Cell Biology — structure, organelles, division, signaling, stem cells, and cell death — with diagrams, viva questions, MCQs, and previous exam questions.',
    /* Each string below is a full HTML section (rendered inside a <li> by notes.js).
       Diagrams are built with plain HTML/CSS using the site's existing CSS variables
       (var(--teal), var(--line), etc.) so no new stylesheet rules were needed. */
    topics:[

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">1. Introduction to the Cell &amp; Cell Theory</h4>
       <p style="margin:0 0 8px;">The cell is the smallest structural and functional unit of life, capable of independent existence and carrying out all processes necessary for life — metabolism, growth, response to stimuli, and reproduction. The cell theory, first proposed by Matthias Schleiden and Theodor Schwann in 1839 and later extended by Rudolf Virchow in 1855, rests on three core principles.</p>
       <p style="margin:0 0 8px;"><strong>1.</strong> All living organisms are composed of one or more cells.<br>
       <strong>2.</strong> The cell is the basic unit of structure and organization in organisms.<br>
       <strong>3.</strong> Cells arise from pre-existing cells (Omnis cellula e cellula).</p>
       <p style="margin:0 0 8px;">Modern cell theory adds that energy flow occurs within cells, hereditary information (DNA) is passed from one cell to another during division, and all cells share a broadly similar chemical composition.</p>
       <p style="margin:0;">The discovery of the cell itself predates the formal theory by nearly two centuries. Robert Hooke first observed and named "cells" in 1665 while examining cork tissue under a primitive microscope, seeing empty box-like compartments resembling monks' quarters (cellulae). Antonie van Leeuwenhoek later observed living cells — bacteria and protozoa — using hand-ground lenses of his own design, laying the groundwork for the cellular view of life that Schleiden, Schwann, and Virchow would later formalize.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">2. Prokaryotic vs Eukaryotic Cells</h4>
       <p style="margin:0 0 10px;">Cells are broadly classified into two types based on the organization of their genetic material and internal compartments.</p>
       <div style="display:flex; gap:12px; margin:10px 0; flex-wrap:wrap;">
         <div style="flex:1; min-width:160px; border:1px solid var(--line); border-radius:10px; padding:12px; background:var(--teal-soft);">
           <strong style="color:var(--teal-deep); font-size:13px;">Prokaryotic Cell</strong>
           <ul style="margin:8px 0 0; padding-left:16px; font-size:13px; color:var(--ink);">
             <li>No true nucleus — DNA lies free in the nucleoid region</li>
             <li>No membrane-bound organelles</li>
             <li>Size: roughly 1–10 µm</li>
             <li>Ribosomes are 70S</li>
             <li>Examples: bacteria, archaea</li>
           </ul>
         </div>
         <div style="flex:1; min-width:160px; border:1px solid var(--line); border-radius:10px; padding:12px; background:var(--coral-soft);">
           <strong style="color:#A8402C; font-size:13px;">Eukaryotic Cell</strong>
           <ul style="margin:8px 0 0; padding-left:16px; font-size:13px; color:var(--ink);">
             <li>True membrane-bound nucleus</li>
             <li>Contains organelles — mitochondria, ER, Golgi, lysosomes</li>
             <li>Size: roughly 10–100 µm</li>
             <li>Ribosomes are 80S (70S in mitochondria/chloroplast)</li>
             <li>Examples: animal, plant, fungal, protist cells</li>
           </ul>
         </div>
       </div>
       <p style="margin:0;">This distinction is one of the most fundamental in biology and underlies almost every downstream difference in how the two cell types replicate, express genes, and organize metabolism.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">3. Techniques to Study Cells — Microscopy</h4>
       <p style="margin:0 0 8px;">Almost everything known about cell structure comes from microscopy, and different techniques resolve different levels of detail.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Light (bright-field) microscopy:</strong> uses visible light and glass lenses; resolution is limited to about 200 nm, enough to see cell shape, nuclei, and large organelles.</li>
         <li><strong>Phase-contrast &amp; DIC microscopy:</strong> enhance contrast in unstained, living cells by exploiting differences in refractive index, useful for observing dividing cells in real time.</li>
         <li><strong>Fluorescence microscopy:</strong> uses fluorophore-tagged antibodies or proteins (e.g. GFP) to visualize specific molecules within the cell against a dark background.</li>
         <li><strong>Confocal microscopy:</strong> uses a laser and pinhole aperture to eliminate out-of-focus light, producing sharp optical sections that can be reconstructed into 3D images.</li>
         <li><strong>Transmission electron microscopy (TEM):</strong> passes a beam of electrons through an ultra-thin section, achieving resolution down to about 0.2 nm — enough to see membranes, ribosomes, and viral particles.</li>
         <li><strong>Scanning electron microscopy (SEM):</strong> scans a focused electron beam across the surface of a specimen to build a detailed 3D-like image of surface topology.</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">4. Plasma Membrane &amp; the Fluid Mosaic Model</h4>
       <p style="margin:0 0 10px;">Proposed by Singer and Nicolson in 1972, the fluid mosaic model describes the plasma membrane as a dynamic, two-dimensional fluid in which phospholipid molecules and embedded proteins can move laterally.</p>
       <div style="margin:10px 0; padding:14px; border:1px solid var(--line); border-radius:10px; background:#fff;">
         <div style="display:flex; justify-content:space-between; padding:0 4px;">
           <div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--teal);"></div>
         </div>
         <div style="display:flex; justify-content:space-between; padding:0 4px;">
           <div style="width:1px;height:20px;background:var(--ink-soft);"></div><div style="width:1px;height:20px;background:var(--ink-soft);"></div><div style="width:1px;height:20px;background:var(--ink-soft);"></div><div style="width:1px;height:20px;background:var(--ink-soft);"></div><div style="width:1px;height:20px;background:var(--ink-soft);"></div><div style="width:1px;height:20px;background:var(--ink-soft);"></div><div style="width:1px;height:20px;background:var(--ink-soft);"></div><div style="width:1px;height:20px;background:var(--ink-soft);"></div>
         </div>
         <div style="display:flex; justify-content:space-between; padding:0 4px;">
           <div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div><div style="width:9px;height:9px;border-radius:50%;background:var(--coral);"></div>
         </div>
         <p style="margin:8px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">Phospholipid bilayer — hydrophilic heads (dots) facing out, hydrophobic tails (lines) facing in</p>
       </div>
       <p style="margin:0 0 8px;">The bilayer is composed of phospholipids, cholesterol (which regulates fluidity), glycolipids, and both integral and peripheral proteins. Transport across it occurs via:</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Passive transport</strong> — simple diffusion, facilitated diffusion, osmosis (no energy required)</li>
         <li><strong>Active transport</strong> — moves substances against their concentration gradient using ATP (e.g. Na⁺/K⁺ pump)</li>
         <li><strong>Bulk transport</strong> — endocytosis (phagocytosis, pinocytosis) and exocytosis</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">5. Cell Wall (Plant &amp; Bacterial)</h4>
       <p style="margin:0 0 8px;">Unlike animal cells, plant cells, fungi, and bacteria possess a rigid cell wall external to the plasma membrane that provides mechanical strength and shape.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Plant cell wall:</strong> made primarily of cellulose, along with hemicellulose and pectin; divided into the middle lamella, primary wall, and (in mature cells) a secondary wall.</li>
         <li><strong>Bacterial cell wall:</strong> made of peptidoglycan (murein); Gram-positive bacteria have a thick peptidoglycan layer, while Gram-negative bacteria have a thin layer plus an outer membrane — the basis of the Gram staining technique.</li>
         <li><strong>Fungal cell wall:</strong> composed mainly of chitin.</li>
       </ul>
       <p style="margin:8px 0 0;">Adjacent plant cells are connected across their cell walls by <strong>plasmodesmata</strong> — narrow channels lined by plasma membrane that allow direct cytoplasmic continuity between neighboring cells, enabling the movement of water, nutrients, ions, and signaling molecules across plant tissue much as gap junctions do in animal tissue.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">6. Nucleus</h4>
       <p style="margin:0 0 8px;">The nucleus is the control center of the eukaryotic cell, housing the genetic material. It is bounded by a double membrane called the nuclear envelope, which is studded with nuclear pores that regulate the exchange of molecules (RNA, proteins) between the nucleus and cytoplasm.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Nuclear envelope:</strong> double membrane continuous with the endoplasmic reticulum</li>
         <li><strong>Nucleoplasm:</strong> the fluid matrix containing chromatin</li>
         <li><strong>Chromatin:</strong> DNA wound around histone proteins; condenses into chromosomes during division</li>
         <li><strong>Nucleolus:</strong> the site of ribosomal RNA (rRNA) synthesis and ribosome assembly</li>
         <li><strong>Nuclear lamina:</strong> a meshwork of lamin proteins lining the inner nuclear membrane, providing structural support and anchoring chromatin</li>
       </ul>
       <p style="margin:8px 0 0;">Chromatin itself exists in two states: <strong>heterochromatin</strong>, tightly packed and transcriptionally inactive, and <strong>euchromatin</strong>, loosely packed and actively transcribed. During interphase most chromatin is decondensed, allowing gene expression machinery access to DNA; it condenses fully into visible rod-shaped chromosomes only when the cell prepares to divide.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">7. Mitochondria — the Powerhouse of the Cell</h4>
       <div style="margin:10px 0; display:flex; justify-content:center;">
         <div style="width:150px; height:80px; border-radius:50%/40%; border:2px solid var(--teal-deep); position:relative; background:var(--teal-soft); overflow:hidden;">
           <div style="position:absolute; top:14px; left:15px; width:120px; height:6px; background:var(--teal); border-radius:4px; transform:rotate(-8deg);"></div>
           <div style="position:absolute; top:30px; left:10px; width:130px; height:6px; background:var(--teal); border-radius:4px; transform:rotate(6deg);"></div>
           <div style="position:absolute; top:46px; left:15px; width:120px; height:6px; background:var(--teal); border-radius:4px; transform:rotate(-6deg);"></div>
           <div style="position:absolute; top:62px; left:10px; width:130px; height:6px; background:var(--teal); border-radius:4px; transform:rotate(8deg);"></div>
         </div>
       </div>
       <p style="margin:0 0 8px; font-size:11.5px; text-align:center; color:var(--ink-soft);">Outer membrane (smooth) and inner membrane folded into cristae (ridges shown above)</p>
       <p style="margin:0 0 8px;">Mitochondria are double-membraned organelles responsible for producing ATP via aerobic respiration (oxidative phosphorylation). The inner membrane folds into cristae to increase surface area for the electron transport chain, while the matrix contains enzymes for the Krebs cycle, mitochondrial DNA, and ribosomes — evidence for the endosymbiotic theory of mitochondrial origin, which proposes that mitochondria descend from free-living aerobic bacteria engulfed by an ancestral host cell roughly 1.5–2 billion years ago.</p>
       <p style="margin:0;">ATP synthesis itself follows the chemiosmotic theory proposed by Peter Mitchell: electrons passed along the electron transport chain (embedded in the inner membrane) pump protons (H⁺) from the matrix into the intermembrane space, building an electrochemical gradient. Protons flow back down this gradient through ATP synthase, and the resulting rotational movement of the enzyme drives the phosphorylation of ADP into ATP. Because they carry their own circular DNA and 70S ribosomes and divide independently of the cell cycle by binary fission, mitochondria are described as semi-autonomous organelles.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">8. Endoplasmic Reticulum (ER)</h4>
       <p style="margin:0 0 8px;">The ER is a network of membranous tubules and sacs (cisternae) continuous with the nuclear envelope, existing in two forms:</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Rough ER (RER):</strong> studded with ribosomes; synthesizes and folds proteins destined for secretion, the membrane, or lysosomes</li>
         <li><strong>Smooth ER (SER):</strong> lacks ribosomes; synthesizes lipids and steroids, detoxifies drugs, and stores calcium ions (especially prominent in muscle cells as the sarcoplasmic reticulum)</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">9. Golgi Apparatus</h4>
       <p style="margin:0 0 8px;">The Golgi apparatus is a stack of flattened, membrane-bound sacs (cisternae) that receives proteins and lipids from the ER, modifies them (glycosylation, sulfation), sorts them, and packages them into vesicles for secretion or delivery to other organelles. It has a distinct polarity — the <em>cis</em> face receives material from the ER, and the <em>trans</em> face dispatches vesicles toward their destination.</p>
       <p style="margin:0;">Movement between compartments relies on coated vesicles: COPII-coated vesicles carry cargo forward from the ER to the Golgi's cis face, COPI-coated vesicles move cargo backward between Golgi cisternae and back to the ER (retrieving escaped ER-resident proteins), and clathrin-coated vesicles bud from the trans-Golgi network to deliver proteins to lysosomes, secretory vesicles, or the plasma membrane.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">10. Lysosomes, Peroxisomes &amp; Vacuoles</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Lysosomes:</strong> membrane-bound sacs containing hydrolytic enzymes (acid hydrolases) that break down macromolecules, damaged organelles (autophagy), and engulfed pathogens; often called the "suicide bags" of the cell since their rupture can trigger cell death</li>
         <li><strong>Peroxisomes:</strong> contain oxidative enzymes (e.g. catalase) that break down fatty acids and detoxify hydrogen peroxide</li>
         <li><strong>Vacuoles:</strong> large, fluid-filled sacs — especially prominent in plant cells, where the central vacuole maintains turgor pressure and stores water, ions, and waste products</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">11. Ribosomes</h4>
       <p style="margin:0 0 8px;">Ribosomes are the site of protein synthesis, made of ribosomal RNA (rRNA) and proteins, organized into a large and small subunit. Prokaryotic ribosomes are 70S (50S + 30S subunits), while eukaryotic cytoplasmic ribosomes are 80S (60S + 40S subunits). Ribosomes may be free in the cytoplasm (making proteins for internal use) or bound to the rough ER (making proteins for export or membrane insertion).</p>
       <p style="margin:0;">Multiple ribosomes can translate the same mRNA strand simultaneously, forming a chain-like structure called a <strong>polysome (polyribosome)</strong>, which allows a cell to produce many copies of a protein from a single transcript in a short time — an efficient strategy that biotechnological expression systems (e.g. bacterial or yeast protein production) exploit heavily.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">12. Cytoskeleton</h4>
       <p style="margin:0 0 8px;">The cytoskeleton is an internal scaffold of protein filaments that gives the cell shape, enables movement, and organizes intracellular transport.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Microfilaments (actin filaments):</strong> ~7 nm thick; involved in cell shape, muscle contraction, and cytoplasmic streaming</li>
         <li><strong>Microtubules:</strong> ~25 nm, hollow tubes of tubulin; form the spindle apparatus during division and the core of cilia/flagella</li>
         <li><strong>Intermediate filaments:</strong> ~10 nm; provide tensile strength (e.g. keratin in skin cells)</li>
       </ul>
       <p style="margin:8px 0 0;">Movement along microfilaments and microtubules is driven by motor proteins that convert the chemical energy of ATP into mechanical work: <strong>myosin</strong> walks along actin filaments (the basis of muscle contraction), while <strong>kinesin</strong> and <strong>dynein</strong> walk along microtubules, carrying vesicles and organelles toward the plus and minus ends respectively. The same microtubule-dynein system also powers the beating of cilia and flagella.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">13. The Cell Cycle</h4>
       <p style="margin:0 0 10px;">The cell cycle is the ordered sequence of events by which a cell duplicates its contents and divides into two daughter cells.</p>
       <div style="margin:10px 0; display:flex; border-radius:8px; overflow:hidden; border:1px solid var(--line); font-size:11.5px; text-align:center; color:#fff;">
         <div style="flex:4; background:var(--teal); padding:8px 4px;">G1<br><span style="font-size:10px; opacity:0.85;">Growth</span></div>
         <div style="flex:3; background:var(--teal-deep); padding:8px 4px;">S<br><span style="font-size:10px; opacity:0.85;">DNA synthesis</span></div>
         <div style="flex:2; background:var(--teal); padding:8px 4px;">G2<br><span style="font-size:10px; opacity:0.85;">Prep</span></div>
         <div style="flex:1; background:var(--coral); padding:8px 4px;">M</div>
       </div>
       <p style="margin:0;">G1, S, and G2 together make up interphase, the longest part of the cycle, during which the cell grows and replicates its DNA. The M phase (mitosis) is when the cell actually divides. Progression through checkpoints (G1/S, G2/M, and the spindle checkpoint) is controlled by cyclins and cyclin-dependent kinases (CDKs), ensuring errors are not passed on to daughter cells.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">14. Mitosis</h4>
       <p style="margin:0 0 8px;">Mitosis is nuclear division producing two genetically identical daughter cells, used for growth and tissue repair. It proceeds through four classical stages:</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Prophase:</strong> chromatin condenses into visible chromosomes; spindle fibers begin to form; nuclear envelope breaks down</li>
         <li><strong>Metaphase:</strong> chromosomes align at the cell's equatorial plate</li>
         <li><strong>Anaphase:</strong> sister chromatids separate and move to opposite poles</li>
         <li><strong>Telophase:</strong> nuclear envelopes reform around each set of chromosomes; the cell pinches apart during cytokinesis</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">15. Meiosis &amp; its Significance</h4>
       <p style="margin:0 0 8px;">Meiosis is a specialized type of division that produces four genetically distinct haploid gametes from one diploid cell, occurring in two rounds (meiosis I and II) with only one round of DNA replication.</p>
       <p style="margin:0;">Its biological significance lies in halving the chromosome number to maintain a constant chromosome number across generations, and in generating genetic variation through crossing over (during prophase I) and independent assortment of homologous chromosomes.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">16. Cell Signaling</h4>
       <p style="margin:0 0 8px;">Cells communicate through signaling molecules that bind to receptors, triggering intracellular responses. Receptors are broadly of three types: cell-surface receptors (e.g. G-protein-coupled receptors, receptor tyrosine kinases), intracellular receptors (for lipid-soluble hormones like steroids), and ion-channel receptors.</p>
       <p style="margin:0 0 8px;">Signal transduction often involves second messengers — small molecules like cyclic AMP (cAMP), calcium ions, and IP₃ — which amplify and relay the signal from the receptor to downstream effectors, ultimately altering gene expression or cell behavior.</p>
       <p style="margin:0;">A widely studied example is the receptor tyrosine kinase (RTK) → RAS → MAPK cascade: a growth factor binds an RTK, triggering autophosphorylation and activation of the RAS protein, which in turn activates a chain of kinases (RAF → MEK → ERK/MAPK) that ultimately enter the nucleus and switch on genes controlling cell proliferation. Mutations that keep this pathway permanently "on" are a common driver of cancer, which is why RTK/RAS/MAPK components are frequent drug targets.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">17. Cell Junctions</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Tight junctions:</strong> seal adjacent cells together, preventing leakage of molecules between cells (e.g. in intestinal epithelium)</li>
         <li><strong>Desmosomes:</strong> spot-weld cells together, providing mechanical strength in tissues under stress (e.g. skin, cardiac muscle)</li>
         <li><strong>Gap junctions:</strong> form channels directly connecting the cytoplasm of adjacent cells, allowing ions and small molecules to pass — important for electrical coupling in cardiac muscle</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">18. Stem Cells</h4>
       <p style="margin:0 0 8px;">Stem cells are undifferentiated cells capable of self-renewal and differentiation into specialized cell types, classified by their potency:</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Totipotent:</strong> can form an entire organism, including extra-embryonic tissue (e.g. zygote)</li>
         <li><strong>Pluripotent:</strong> can form any cell type of the three germ layers, but not extra-embryonic tissue (e.g. embryonic stem cells)</li>
         <li><strong>Multipotent:</strong> can form a limited range of related cell types (e.g. hematopoietic stem cells)</li>
         <li><strong>Unipotent:</strong> can only give rise to one cell type (e.g. epidermal stem cells)</li>
       </ul>
       <p style="margin:8px 0 0;">Beyond their natural role in growth and tissue repair, stem cells are central to modern biotechnology: hematopoietic stem cell transplants are used to treat blood cancers, induced pluripotent stem cells (iPSCs) — adult cells reprogrammed to a pluripotent state using defined transcription factors (Oct4, Sox2, Klf4, c-Myc) — are used for disease modeling and drug screening, and mesenchymal stem cells are being investigated for regenerative therapies in cartilage, bone, and cardiac tissue.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">19. Apoptosis vs Necrosis</h4>
       <p style="margin:0 0 8px;">Cell death occurs through two principal mechanisms with very different consequences for surrounding tissue.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Apoptosis</strong> (programmed cell death): a controlled, energy-dependent process involving cell shrinkage, chromatin condensation, and formation of apoptotic bodies that are cleared by phagocytes without triggering inflammation. Regulated by caspases and the Bcl-2 protein family.</li>
         <li><strong>Necrosis:</strong> an uncontrolled, pathological form of cell death caused by injury, infection, or toxins, leading to cell swelling, membrane rupture, and release of cellular contents that trigger inflammation.</li>
       </ul>
       <p style="margin:8px 0 0;">Apoptosis proceeds via two converging routes: the <strong>intrinsic (mitochondrial) pathway</strong>, triggered by internal stress such as DNA damage, where pro-apoptotic Bcl-2 family members permeabilize the mitochondrial outer membrane and release cytochrome c to activate caspase-9; and the <strong>extrinsic (death receptor) pathway</strong>, triggered by external ligands (e.g. Fas ligand) binding death receptors on the cell surface, which activates caspase-8. Both converge on executioner caspases (caspase-3, -6, -7) that dismantle the cell in an orderly fashion.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Important Points — Quick Revision</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>Cell theory: cells are the basic unit of life, and arise only from pre-existing cells</li>
         <li>Prokaryotes lack a true nucleus and membrane-bound organelles; eukaryotes have both</li>
         <li>The fluid mosaic model describes the plasma membrane as a fluid bilayer with embedded proteins</li>
         <li>Mitochondria are the site of aerobic respiration and ATP production</li>
         <li>Rough ER makes proteins; smooth ER makes lipids and detoxifies</li>
         <li>The Golgi apparatus modifies, sorts, and packages proteins and lipids</li>
         <li>Lysosomes digest waste and damaged organelles using acid hydrolases</li>
         <li>The cell cycle = interphase (G1, S, G2) + M phase (mitosis + cytokinesis), controlled by cyclins/CDKs</li>
         <li>Mitosis produces two identical diploid cells; meiosis produces four genetically distinct haploid gametes</li>
         <li>Apoptosis is a clean, programmed death; necrosis is a messy, injury-driven death that causes inflammation</li>
         <li>Stem cell potency, from broadest to narrowest: totipotent → pluripotent → multipotent → unipotent</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>What are the three principles of cell theory, and who proposed them?</li>
         <li>How would you distinguish a prokaryotic cell from a eukaryotic cell under a microscope?</li>
         <li>Explain the fluid mosaic model of the plasma membrane.</li>
         <li>Why are mitochondria described as "semi-autonomous" organelles?</li>
         <li>What is the functional difference between rough and smooth endoplasmic reticulum?</li>
         <li>Why are lysosomes called the "suicide bags" of the cell?</li>
         <li>What role do cyclins and CDKs play in regulating the cell cycle?</li>
         <li>List the four stages of mitosis in order and describe one key event in each.</li>
         <li>Why does meiosis, not mitosis, generate genetic variation?</li>
         <li>Differentiate between apoptosis and necrosis in terms of mechanism and tissue effect.</li>
         <li>What distinguishes a totipotent stem cell from a pluripotent stem cell?</li>
         <li>What is the practical difference in resolution between light microscopy and electron microscopy, and why does it matter?</li>
         <li>Explain the chemiosmotic theory of ATP synthesis in your own words.</li>
         <li>What is the difference between heterochromatin and euchromatin?</li>
         <li>Name the two pathways that trigger apoptosis and explain how they converge.</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Cell Biology — Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Cell theory states that cells arise from: <strong>(a)</strong> spontaneous generation <strong>(b)</strong> pre-existing cells <strong>(c)</strong> non-living matter <strong>(d)</strong> viruses <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Which organelle is absent in a prokaryotic cell? <strong>(a)</strong> Ribosome <strong>(b)</strong> Cell membrane <strong>(c)</strong> Mitochondria <strong>(d)</strong> Cell wall <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>The fluid mosaic model was proposed by: <strong>(a)</strong> Watson &amp; Crick <strong>(b)</strong> Singer &amp; Nicolson <strong>(c)</strong> Schleiden &amp; Schwann <strong>(d)</strong> Virchow <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Cristae are folds found in the: <strong>(a)</strong> Golgi apparatus <strong>(b)</strong> Nucleus <strong>(c)</strong> Mitochondria <strong>(d)</strong> Lysosome <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Rough ER appears "rough" due to the presence of: <strong>(a)</strong> Lysosomes <strong>(b)</strong> Ribosomes <strong>(c)</strong> Peroxisomes <strong>(d)</strong> Cristae <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Which phase of the cell cycle involves DNA replication? <strong>(a)</strong> G1 <strong>(b)</strong> S <strong>(c)</strong> G2 <strong>(d)</strong> M <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Sister chromatids separate during: <strong>(a)</strong> Prophase <strong>(b)</strong> Metaphase <strong>(c)</strong> Anaphase <strong>(d)</strong> Telophase <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Meiosis produces: <strong>(a)</strong> 2 diploid cells <strong>(b)</strong> 4 diploid cells <strong>(c)</strong> 4 haploid cells <strong>(d)</strong> 2 haploid cells <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>A stem cell that can form any cell type of all three germ layers is: <strong>(a)</strong> Unipotent <strong>(b)</strong> Multipotent <strong>(c)</strong> Totipotent <strong>(d)</strong> Pluripotent <br><em style="color:var(--teal);">Answer: (d)</em></li>
         <li>Which process is a clean, programmed form of cell death? <strong>(a)</strong> Necrosis <strong>(b)</strong> Apoptosis <strong>(c)</strong> Lysis <strong>(d)</strong> Autolysis <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Which technique gives the highest resolution for viewing internal cell ultrastructure? <strong>(a)</strong> Bright-field microscopy <strong>(b)</strong> Phase-contrast microscopy <strong>(c)</strong> Transmission electron microscopy <strong>(d)</strong> Scanning electron microscopy <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>COPII-coated vesicles primarily transport cargo: <strong>(a)</strong> From Golgi to ER <strong>(b)</strong> From ER to Golgi <strong>(c)</strong> From nucleus to cytoplasm <strong>(d)</strong> From lysosome to plasma membrane <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The intrinsic apoptotic pathway is triggered mainly through: <strong>(a)</strong> Fas ligand binding <strong>(b)</strong> Mitochondrial cytochrome c release <strong>(c)</strong> Necrotic membrane rupture <strong>(d)</strong> Lysosomal enzyme leakage <br><em style="color:var(--teal);">Answer: (b)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Exam Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Describe the fluid mosaic model of the plasma membrane with a labeled diagram.</li>
         <li>Explain the phases of mitosis with the significance of each stage.</li>
         <li>Differentiate between prokaryotic and eukaryotic cells with suitable examples.</li>
         <li>Describe the structure of the Golgi apparatus and explain its role in protein trafficking.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Write a note on the structure and function of mitochondria.</li>
         <li>What is the endosymbiotic theory?</li>
         <li>Distinguish between rough and smooth endoplasmic reticulum.</li>
         <li>Explain the intrinsic and extrinsic pathways of apoptosis.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Define apoptosis.</li>
         <li>What are cyclins?</li>
         <li>Name the four types of stem cell potency.</li>
         <li>What is the difference between heterochromatin and euchromatin?</li>
       </ul>`

    ] },
  { tag:'Unit 02', title:'Genetics', desc:'Inheritance, variation, and the rules governing traits.',
    topics:['Mendelian inheritance','Linkage & crossing over','Mutations','Population genetics basics'] },
  { tag:'Unit 03', title:'Molecular Biology', desc:'DNA, RNA, and the central dogma in detail.',
    topics:['DNA replication','Transcription','Translation','Gene regulation'] },
  { tag:'Unit 04', title:'Genetic Engineering', desc:'Tools and techniques to manipulate genetic material.',
    topics:['Restriction enzymes & vectors','PCR','Cloning techniques','CRISPR-Cas9 basics'] },
  { tag:'Unit 05', title:'Immunology', desc:'How the body recognizes and responds to pathogens.',
    topics:['Innate vs adaptive immunity','Antibody structure','Vaccines','ELISA technique'] },
  { tag:'Unit 06', title:'Bioinformatics', desc:'Computational tools for biological data.',
    topics:['Sequence alignment','BLAST basics','Databases (NCBI, UniProt)','Phylogenetic trees'] },
];

const QUESTIONS = [
  { q:'Which organelle is known as the powerhouse of the cell?',
    options:['Golgi apparatus','Mitochondria','Ribosome','Lysosome'], answer:1 },
  { q:'PCR is primarily used to:',
    options:['Sequence proteins','Amplify DNA fragments','Separate cells by size','Stain chromosomes'], answer:1 },
  { q:'Restriction enzymes function by:',
    options:['Joining DNA fragments','Cutting DNA at specific sequences','Unwinding the DNA helix','Synthesizing new RNA'], answer:1 },
  { q:'Which of these is part of adaptive immunity?',
    options:['Skin barrier','Macrophages','B and T lymphocytes','Stomach acid'], answer:2 },
  { q:'BLAST is a tool used for:',
    options:['Cell culturing','Sequence similarity search','Protein purification','Gel electrophoresis'], answer:1 },
];

const PRACTICALS = [
  { title:'Isolation of genomic DNA', desc:'Extract and visualize genomic DNA from a plant or bacterial sample.', meta:'Molecular Biology' },
  { title:'Agarose gel electrophoresis', desc:'Separate DNA fragments by size and estimate their length.', meta:'Molecular Biology' },
  { title:'Bacterial transformation', desc:'Introduce plasmid DNA into competent E. coli cells.', meta:'Genetic Engineering' },
  { title:'ELISA for antigen detection', desc:'Detect and quantify a specific antigen using enzyme-linked assay.', meta:'Immunology' },
  { title:'Mitosis observation in onion root tip', desc:'Prepare a slide and identify stages of mitosis under a microscope.', meta:'Cell Biology' },
  { title:'PCR amplification setup', desc:'Set up a PCR reaction mix and run a thermal cycling protocol.', meta:'Genetic Engineering' },
  { title:'Sequence alignment using BLAST', desc:'Run a nucleotide sequence through BLAST and interpret results.', meta:'Bioinformatics' },
  { title:'Blood group & Rh typing', desc:'Determine ABO and Rh blood group using antisera.', meta:'Immunology' },
];

const PAPERS = [
  { year:'2025', exam:'Semester End Exam', sem:'Semester IV' },
  { year:'2024', exam:'Semester End Exam', sem:'Semester IV' },
  { year:'2024', exam:'Mid Semester Exam', sem:'Semester III' },
  { year:'2023', exam:'Semester End Exam', sem:'Semester III' },
  { year:'2022', exam:'Semester End Exam', sem:'Semester II' },
];
