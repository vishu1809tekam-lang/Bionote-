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
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; gap:6px; min-width:280px; align-items:flex-start;">

           <!-- Repeating phospholipid units: head / tail / tail / head -->
           <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:2px;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--teal);"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:16px; height:16px; border-radius:50%; background:var(--coral);"></div>
           </div>
           <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:2px;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--teal);"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:16px; height:16px; border-radius:50%; background:var(--coral);"></div>
           </div>

           <!-- Embedded integral membrane protein spanning the bilayer -->
           <div style="flex:1.2; display:flex; flex-direction:column; align-items:center; justify-content:center;">
             <div style="width:22px; height:62px; background:var(--teal-deep); border-radius:8px; opacity:0.9;"></div>
           </div>

           <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:2px;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--teal);"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:16px; height:16px; border-radius:50%; background:var(--coral);"></div>
           </div>
           <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:2px;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--teal);"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:16px; height:16px; border-radius:50%; background:var(--coral);"></div>
           </div>
           <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:2px;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--teal);"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:3px; height:26px; background:var(--ink-soft); border-radius:2px;"></div>
             <div style="width:16px; height:16px; border-radius:50%; background:var(--coral);"></div>
           </div>

         </div>

         <!-- Legend -->
         <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:12px; padding-top:10px; border-top:1px dashed var(--line);">
           <div style="display:flex; align-items:center; gap:6px; font-size:11.5px; color:var(--ink-soft);">
             <div style="width:11px; height:11px; border-radius:50%; background:var(--teal);"></div> Hydrophilic head (outer)
           </div>
           <div style="display:flex; align-items:center; gap:6px; font-size:11.5px; color:var(--ink-soft);">
             <div style="width:11px; height:11px; border-radius:50%; background:var(--coral);"></div> Hydrophilic head (inner)
           </div>
           <div style="display:flex; align-items:center; gap:6px; font-size:11.5px; color:var(--ink-soft);">
             <div style="width:8px; height:11px; background:var(--ink-soft); border-radius:2px;"></div> Hydrophobic fatty acid tail
           </div>
           <div style="display:flex; align-items:center; gap:6px; font-size:11.5px; color:var(--ink-soft);">
             <div style="width:9px; height:11px; background:var(--teal-deep); border-radius:2px;"></div> Integral membrane protein
           </div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">Cross-section of the plasma membrane — a phospholipid bilayer with an embedded integral protein spanning both layers</p>
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
  { tag:'Unit 02', title:'Genetics', desc:'Full B.Sc. Biotechnology-level Genetics notes, built topic by topic. Currently live: Topics 1–8 — Introduction, History, Mendel\'s Laws, Chromosome Theory, Gene Concept, DNA/RNA as Genetic Material, Chromosome Structure.',
    /* GENETICS UNIT — built one topic at a time per instructor's request.
       Topic 1: Introduction to Genetics (~2,200 words across the entries below).
       Topics 2–31 will be appended here in the same pattern on request. */
    topics:[

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 1 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">Introduction to Genetics</h4>
       <p style="margin:0 0 10px;">Imagine two things: first, that a child often looks like their parents — same eye color, same height pattern, maybe even the same laugh. Second, that no two children of the same parents are ever exactly identical, not even twins raised in the same house eating the same food. Genetics is the branch of biology that explains both of these observations at once — why traits are passed down, and why they still vary from one individual to the next.</p>
       <p style="margin:0;">In the simplest terms, genetics is the science of heredity and variation. It studies how characteristics — height, blood group, eye color, and even the risk of certain diseases — are transmitted from parents to offspring through generations, and why living things are never perfect photocopies of their parents.</p>`,

      `<div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">Genetics is the branch of biology that studies genes, heredity (the passing of traits from parents to offspring), and variation (the differences that arise between individuals) in living organisms.</p>
       </div>
       <p style="margin:10px 0 0;">The word "genetics" comes from the Greek word <em>genno</em>, meaning "to give birth." It was coined by the British biologist William Bateson in 1905 — notice that this is a fairly recent word, even though people had been breeding better crops and animals for thousands of years without knowing exactly why it worked.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">A Short History — How We Got Here</h4>
       <p style="margin:0 0 8px;">Long before anyone understood DNA, farmers were already practicing genetics without calling it that. Ancient civilizations in Egypt, Mesopotamia, and India selectively bred the tallest wheat, the sweetest fruit, and the calmest cattle, generation after generation — a practice called <strong>artificial selection</strong>. They knew that "like produces like," but they had no idea why.</p>
       <p style="margin:0 0 8px;">The real turning point came in the 1860s with an Austrian monk named <strong>Gregor Johann Mendel</strong>, who grew and cross-bred thousands of pea plants in a monastery garden in Brno (in today's Czech Republic). By carefully counting how traits like flower color and seed shape appeared across generations, he discovered mathematical patterns of inheritance — patterns so far ahead of his time that his 1866 paper was almost completely ignored for 34 years.</p>
       <p style="margin:0;">In 1900, three scientists working independently — Hugo de Vries, Carl Correns, and Erich von Tschermak — rediscovered Mendel's forgotten paper and confirmed his laws using their own plants. This "rediscovery" is usually taken as the true birth of genetics as a formal science.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Key Scientists Behind Genetics</h4>
       <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Scientist</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Contribution</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Year</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Gregor Mendel</td><td style="padding:8px 10px; border:1px solid var(--line);">Laws of Inheritance (pea plant experiments)</td><td style="padding:8px 10px; border:1px solid var(--line);">1866</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Walter Sutton &amp; Theodor Boveri</td><td style="padding:8px 10px; border:1px solid var(--line);">Chromosome Theory of Inheritance</td><td style="padding:8px 10px; border:1px solid var(--line);">1902</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Thomas Hunt Morgan</td><td style="padding:8px 10px; border:1px solid var(--line);">Gene linkage, using fruit flies (<em>Drosophila</em>)</td><td style="padding:8px 10px; border:1px solid var(--line);">1910</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Oswald Avery, Colin MacLeod &amp; Maclyn McCarty</td><td style="padding:8px 10px; border:1px solid var(--line);">Proved DNA (not protein) is the genetic material</td><td style="padding:8px 10px; border:1px solid var(--line);">1944</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">James Watson &amp; Francis Crick</td><td style="padding:8px 10px; border:1px solid var(--line);">Double helix structure of DNA</td><td style="padding:8px 10px; border:1px solid var(--line);">1953</td></tr>
         </tbody>
       </table>
       <p style="margin:0; font-size:12.5px; color:var(--ink-soft);">Note: Rosalind Franklin's X-ray diffraction images (especially "Photo 51") were essential evidence used by Watson and Crick, though she was not awarded the Nobel Prize, which is given only to living scientists and was awarded in 1962, after her death in 1958.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Levels of Genetic Organization</h4>
       <p style="margin:0 0 10px;">Before going further, it helps to see how the building blocks of genetics fit inside one another, from the smallest chemical unit to the entire genetic blueprint of an organism.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; align-items:center; gap:6px; min-width:520px; justify-content:center;">
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--teal-soft); border-radius:8px;">
             <span style="font-size:12.5px; font-weight:600; color:var(--teal-deep);">Nucleotide</span><br>
             <span style="font-size:11px; color:var(--ink-soft);">A, T, G, C</span>
           </div>
           <span style="font-size:18px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--teal-soft); border-radius:8px;">
             <span style="font-size:12.5px; font-weight:600; color:var(--teal-deep);">Gene</span><br>
             <span style="font-size:11px; color:var(--ink-soft);">Unit of heredity</span>
           </div>
           <span style="font-size:18px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--teal-soft); border-radius:8px;">
             <span style="font-size:12.5px; font-weight:600; color:var(--teal-deep);">Chromosome</span><br>
             <span style="font-size:11px; color:var(--ink-soft);">DNA + protein</span>
           </div>
           <span style="font-size:18px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--teal-soft); border-radius:8px;">
             <span style="font-size:12.5px; font-weight:600; color:var(--teal-deep);">Genome</span><br>
             <span style="font-size:11px; color:var(--ink-soft);">All DNA of organism</span>
           </div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">Levels of genetic organization — from a single nucleotide to the complete genome</p>
       </div>
       <p style="margin:0;">A useful way to think about this: a <strong>nucleotide</strong> is like a single letter, a <strong>gene</strong> is like a complete sentence carrying one instruction (e.g. "make this protein"), a <strong>chromosome</strong> is like a whole chapter containing thousands of such sentences, and the <strong>genome</strong> is the entire book — every chromosome, every gene, every instruction the organism carries.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Branches of Genetics</h4>
       <p style="margin:0 0 10px;">Genetics is not one single subject studied one way — over the last 150 years it has branched into several specialized fields, each answering a different kind of question.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff;">
         <div style="display:flex; justify-content:center;">
           <div style="padding:8px 20px; background:var(--teal-deep); color:#fff; border-radius:8px; font-size:13px; font-weight:600;">Genetics</div>
         </div>
         <div style="display:flex; justify-content:center;">
           <div style="width:2px; height:14px; background:var(--line);"></div>
         </div>
         <div style="height:1px; background:var(--line); margin:0 8%;"></div>
         <div style="display:flex; justify-content:space-between; gap:6px; margin-top:14px; flex-wrap:wrap;">
           <div style="flex:1; min-width:95px; text-align:center; padding:9px 4px; background:var(--teal-soft); border-radius:8px; font-size:11.5px; color:var(--teal-deep); font-weight:600;">Classical Genetics</div>
           <div style="flex:1; min-width:95px; text-align:center; padding:9px 4px; background:var(--teal-soft); border-radius:8px; font-size:11.5px; color:var(--teal-deep); font-weight:600;">Molecular Genetics</div>
           <div style="flex:1; min-width:95px; text-align:center; padding:9px 4px; background:var(--teal-soft); border-radius:8px; font-size:11.5px; color:var(--teal-deep); font-weight:600;">Population Genetics</div>
           <div style="flex:1; min-width:95px; text-align:center; padding:9px 4px; background:var(--teal-soft); border-radius:8px; font-size:11.5px; color:var(--teal-deep); font-weight:600;">Cytogenetics</div>
           <div style="flex:1; min-width:95px; text-align:center; padding:9px 4px; background:var(--teal-soft); border-radius:8px; font-size:11.5px; color:var(--teal-deep); font-weight:600;">Human Genetics</div>
         </div>
       </div>
       <ul style="margin:10px 0 0; padding-left:18px;">
         <li><strong>Classical (Mendelian) Genetics:</strong> studies inheritance through breeding experiments and observable traits, without looking at DNA directly</li>
         <li><strong>Molecular Genetics:</strong> studies genes at the level of DNA and RNA molecules — how they are copied, read, and expressed</li>
         <li><strong>Population Genetics:</strong> studies how gene frequencies change across whole populations over time</li>
         <li><strong>Cytogenetics:</strong> studies chromosomes — their number, structure, and abnormalities — usually under a microscope</li>
         <li><strong>Human Genetics:</strong> applies genetic principles specifically to human traits, inheritance patterns, and disorders</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Why Genetics Matters (Importance &amp; Advantages of Studying It)</h4>
       <p style="margin:0 0 8px;">Genetics is not just an academic subject — it is the foundation that modern biotechnology, agriculture, and medicine are built on. Understanding it gives you the ability to explain, predict, and eventually manipulate biological outcomes.</p>
       <ul style="margin:0; padding-left:18px;">
         <li>It explains why children resemble their parents but are never identical to them</li>
         <li>It allows doctors to predict the chance of a genetic disorder appearing in a family</li>
         <li>It is the basis for developing better crop varieties and disease-resistant livestock</li>
         <li>It underlies almost every modern biotechnology tool — from PCR to CRISPR gene editing</li>
         <li>It helps in forensic science, such as DNA fingerprinting used to identify individuals</li>
       </ul>
       <div style="margin:12px 0 0; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Important</span>
         <p style="margin:6px 0 0; font-size:14px;">Every single biotechnology technique you will study later in this course — cloning, PCR, gene therapy, GMOs — depends on the basic genetic principles introduced in this unit. If this unit feels shaky, everything after it will feel harder than it needs to be.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Limitations of Early Genetics</h4>
       <p style="margin:0;">Classical genetics, as powerful as it was, had real limits. It could describe <em>that</em> a trait was inherited and even predict the ratio in which it would appear, but for almost a century it could not explain <em>what</em> a gene physically was, or <em>how</em> it actually produced a trait. It also struggled with traits that don't follow simple patterns — such as height or skin color, which are controlled by many genes acting together (polygenic inheritance), or traits strongly influenced by environment, such as a plant's final height depending on both its genes and the soil it grows in. These gaps were only filled once molecular genetics arrived in the mid-20th century with the discovery of DNA's structure and function.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Applications of Genetics</h4>
       <div style="margin:0 0 10px; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Biotechnology Application</span>
         <p style="margin:6px 0 0; font-size:14px;">Genetics provides the raw principles that biotechnology turns into tools — for example, understanding how genes are inherited made it possible to later isolate a gene, insert it into bacteria, and mass-produce a human protein such as insulin.</p>
       </div>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Industrial applications:</strong> genetically engineered microorganisms are used to produce enzymes, biofuels, antibiotics, and industrial chemicals more cheaply and cleanly than traditional chemical synthesis.</li>
         <li><strong>Agricultural applications:</strong> genetics underlies selective breeding and genetically modified (GM) crops with better yield, pest resistance, and drought tolerance — for example, Bt cotton, which carries a bacterial gene that produces a natural insecticide.</li>
         <li><strong>Medical applications:</strong> genetic testing can identify disease risk before symptoms appear, gene therapy aims to correct faulty genes directly, and genetics guides the design of personalized medicine based on a person's own DNA.</li>
       </ul>
       <div style="margin:12px 0 0; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Clinical Point</span>
         <p style="margin:6px 0 0; font-size:14px;">Genetic counselors use the principles of inheritance covered in this unit to calculate the probability that a couple's child will inherit a genetic disorder — this is a real, practiced clinical service, covered in more detail later in this Genetics unit.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Modern Developments in Genetics</h4>
       <p style="margin:0 0 8px;">Genetics today looks almost unrecognizable compared to Mendel's pea garden. The <strong>Human Genome Project</strong> (1990–2003) mapped all roughly 3 billion base pairs of human DNA. <strong>Next-generation sequencing (NGS)</strong> can now sequence an entire human genome in about a day, compared to the 13 years the original project took. And <strong>CRISPR-Cas9</strong>, discovered as a bacterial immune system and adapted into a gene-editing tool around 2012, allows scientists to edit specific DNA sequences with remarkable precision — a technique now being explored to treat genetic diseases directly.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">Humans share about 99.9% of their DNA sequence with each other — the remaining 0.1% accounts for nearly all visible human variation, from eye color to disease susceptibility. We also share roughly 60% of our genes with a banana.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Common Mistakes Students Make</h4>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Confusing "gene" with "chromosome" — a chromosome is a large structure containing thousands of genes, not the other way around</li>
         <li>Thinking Mendel discovered DNA — he had no knowledge of DNA at all; he worked purely from observed ratios of traits</li>
         <li>Assuming every trait follows simple Mendelian ratios — many traits (like height) are polygenic and don't show neat 3:1 patterns</li>
         <li>Mixing up heredity (passing traits down) with variation (differences between individuals) as if they were the same idea</li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember the order with "N-G-C-G": <strong>N</strong>ucleotide → <strong>G</strong>ene → <strong>C</strong>hromosome → <strong>G</strong>enome. Think of it as zooming out a camera: from a single letter, to a sentence, to a chapter, to the whole book.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Classical Genetics vs Molecular Genetics</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Classical Genetics</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Molecular Genetics</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Level studied</td><td style="padding:8px 10px; border:1px solid var(--line);">Whole organism and observable traits</td><td style="padding:8px 10px; border:1px solid var(--line);">DNA, RNA, and genes directly</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Founder</td><td style="padding:8px 10px; border:1px solid var(--line);">Gregor Mendel</td><td style="padding:8px 10px; border:1px solid var(--line);">Watson &amp; Crick</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Main tools</td><td style="padding:8px 10px; border:1px solid var(--line);">Breeding experiments, statistics</td><td style="padding:8px 10px; border:1px solid var(--line);">PCR, DNA sequencing, gene cloning</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Era</td><td style="padding:8px 10px; border:1px solid var(--line);">1860s onward</td><td style="padding:8px 10px; border:1px solid var(--line);">1950s onward</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Example question answered</td><td style="padding:8px 10px; border:1px solid var(--line);">Why do 3 out of 4 offspring show the dominant trait?</td><td style="padding:8px 10px; border:1px solid var(--line);">What exact DNA sequence codes for that trait?</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>Genetics is the study of heredity (how traits pass down) and variation (how individuals differ)</li>
         <li>The term "genetics" was coined by William Bateson in 1905</li>
         <li>Gregor Mendel is considered the father of genetics, based on his 1860s pea plant experiments</li>
         <li>Mendel's work was rediscovered in 1900 by de Vries, Correns, and von Tschermak</li>
         <li>Genetic organization runs from nucleotide → gene → chromosome → genome</li>
         <li>Major branches include classical, molecular, population, cytogenetics, and human genetics</li>
         <li>Genetics underlies modern biotechnology, agriculture, medicine, and forensic science</li>
         <li>Classical genetics studies traits at the organism level; molecular genetics studies DNA directly</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Heredity:</strong> the passing of traits from parents to offspring</li>
         <li><strong>Variation:</strong> differences in traits among individuals of the same species</li>
         <li><strong>Gene:</strong> a segment of DNA that carries instructions for a specific trait or protein</li>
         <li><strong>Chromosome:</strong> a thread-like structure of DNA and protein carrying many genes</li>
         <li><strong>Genome:</strong> the complete set of genetic material in an organism</li>
         <li><strong>Trait:</strong> an observable characteristic, such as flower color or blood group</li>
         <li><strong>Artificial selection:</strong> humans deliberately breeding organisms for desired traits</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>What is genetics, in your own words?</li>
         <li>Who coined the term "genetics" and when?</li>
         <li>Why is Gregor Mendel called the father of genetics?</li>
         <li>What is the difference between heredity and variation?</li>
         <li>Arrange in correct order: gene, genome, nucleotide, chromosome.</li>
         <li>Name three branches of genetics and what each one studies.</li>
         <li>Why couldn't classical genetics explain how genes actually worked?</li>
         <li>Give one industrial and one agricultural application of genetics.</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Trace the historical development of genetics from Mendel to the molecular era.</li>
         <li>Discuss the scope and branches of genetics with suitable examples.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Write a short note on the levels of genetic organization.</li>
         <li>Why is 1900 considered a landmark year in the history of genetics?</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Define genetics.</li>
         <li>Who discovered the structure of DNA?</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>The term "genetics" was coined by: <strong>(a)</strong> Gregor Mendel <strong>(b)</strong> William Bateson <strong>(c)</strong> Charles Darwin <strong>(d)</strong> Hugo de Vries <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Mendel conducted his experiments on: <strong>(a)</strong> Fruit flies <strong>(b)</strong> Garden pea plants <strong>(c)</strong> Bacteria <strong>(d)</strong> Guinea pigs <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Mendel's work was rediscovered in the year: <strong>(a)</strong> 1866 <strong>(b)</strong> 1900 <strong>(c)</strong> 1953 <strong>(d)</strong> 1905 <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The correct order of genetic organization, smallest to largest, is: <strong>(a)</strong> Gene → Nucleotide → Chromosome → Genome <strong>(b)</strong> Nucleotide → Gene → Chromosome → Genome <strong>(c)</strong> Chromosome → Gene → Genome → Nucleotide <strong>(d)</strong> Genome → Chromosome → Gene → Nucleotide <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Which branch of genetics studies chromosomes under a microscope? <strong>(a)</strong> Molecular genetics <strong>(b)</strong> Population genetics <strong>(c)</strong> Cytogenetics <strong>(d)</strong> Classical genetics <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>The double helix structure of DNA was discovered by: <strong>(a)</strong> Mendel <strong>(b)</strong> Sutton &amp; Boveri <strong>(c)</strong> Watson &amp; Crick <strong>(d)</strong> Morgan <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Bt cotton is an example of genetics applied to: <strong>(a)</strong> Medicine <strong>(b)</strong> Forensics <strong>(c)</strong> Agriculture <strong>(d)</strong> Industry <br><em style="color:var(--teal);">Answer: (c)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Is genetics the same as biotechnology?</strong><br>No. Genetics is the science that explains how traits are inherited; biotechnology uses that science (and other tools) to build practical applications like GM crops or gene therapy.</p>
       <p style="margin:0 0 8px;"><strong>Q: Did Mendel know about DNA?</strong><br>No — DNA's role as genetic material wasn't confirmed until 1944, and its structure not until 1953, nearly 90 years after Mendel's experiments.</p>
       <p style="margin:0 0 8px;"><strong>Q: Why do siblings look different if they share the same parents?</strong><br>Because of variation — during the formation of eggs and sperm, genes get shuffled and recombined, so each sibling (other than identical twins) inherits a different combination of the parents' genes.</p>
       <p style="margin:0;"><strong>Q: What is the difference between a gene and a genome?</strong><br>A gene is a single instruction (for one trait or protein); the genome is the complete set of every gene and all DNA an organism has.</p>`,

      /* ===================== TOPIC 2 — HISTORY OF GENETICS ===================== */

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 2 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">History of Genetics</h4>
       <p style="margin:0 0 10px;">Topic 1 introduced genetics as a science. But how did we actually get from farmers guessing which cow to breed, to scientists editing a single letter of human DNA with CRISPR? The history of genetics is not a list of dates to memorize — it's a detective story, where each generation of scientists solved one part of the puzzle using only the tools available in their time, often getting it wrong before getting it right.</p>
       <div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">The history of genetics refers to the timeline of discoveries, experiments, and ideas — from ancient selective breeding to modern genome editing — that together built our current understanding of heredity and variation.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Before Genetics Was a Science: Early Ideas (Mostly Wrong)</h4>
       <p style="margin:0 0 8px;">For most of human history, nobody actually knew how traits were inherited — they only had guesses, and most of those guesses turned out to be wrong. It's worth learning these wrong ideas, because they explain why Mendel's discovery in the 1860s felt so revolutionary.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Blending inheritance:</strong> the popular belief (held even by Charles Darwin) that a child's traits are simply a "blend" of the parents' traits — like mixing red and white paint to get pink. This is wrong: many traits, like Mendel's pea flower color, don't blend at all; they stay as separate, distinct units passed intact from parent to offspring.</li>
         <li><strong>Preformationism:</strong> a 17th-century idea that a tiny, fully-formed miniature human (called a "homunculus") already existed inside a sperm or egg cell, and simply grew larger during development — with no real contribution of traits from the other parent.</li>
         <li><strong>Pangenesis:</strong> proposed by Charles Darwin in 1868, the idea that every organ in the body released tiny particles called "gemmules" that traveled to the reproductive organs and passed on that organ's traits. This was also incorrect, but it was an honest attempt to explain heredity before anyone knew about genes.</li>
       </ul>
       <div style="margin:10px 0 0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Remember</span>
         <p style="margin:6px 0 0; font-size:14px;">None of these early ideas involved anything like a gene or DNA. They were reasonable guesses based on the technology of their time — microscopes were weak, and nobody could see chromosomes clearly, let alone DNA.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">The Mendelian Era (1860s–1900)</h4>
       <p style="margin:0 0 8px;">Gregor Mendel broke from all previous guesswork by actually running a careful, quantitative experiment. Between 1856 and 1863, he grew and cross-bred over 28,000 pea plants (<em>Pisum sativum</em>) in the garden of his monastery in Brno, tracking seven distinct traits (like seed shape and flower color) across multiple generations. Unlike earlier thinkers, he counted his results and found clean mathematical ratios — most famously the 3:1 ratio.</p>
       <p style="margin:0;">He published his results in 1866 in a relatively obscure regional journal. Almost nobody noticed. Mendel died in 1884, completely unaware that his work would eventually be considered the foundation of an entire science. It took until 1900 — 34 years later — for three botanists (Hugo de Vries in Holland, Carl Correns in Germany, and Erich von Tschermak in Austria), each working independently on their own plants, to arrive at the same conclusions and then discover that Mendel had already published it decades earlier.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">The Chromosomal Era (1900–1940s)</h4>
       <p style="margin:0 0 8px;">Once Mendel's laws were rediscovered, scientists needed a physical explanation — where inside the cell were these "units of heredity" actually located? In 1902, <strong>Walter Sutton</strong> (studying grasshopper cells) and <strong>Theodor Boveri</strong> (studying sea urchin cells), working independently, both noticed that chromosomes behaved exactly the way Mendel's abstract "hereditary units" were predicted to behave — they came in pairs, separated during gamete formation, and were passed one from each parent. This became the <strong>Chromosome Theory of Inheritance</strong>.</p>
       <p style="margin:0;"><strong>Thomas Hunt Morgan</strong>, working with the fruit fly <em>Drosophila melanogaster</em> starting around 1910, provided the experimental proof. Fruit flies breed fast (a new generation every two weeks) and have only four chromosome pairs, making them ideal for genetics experiments. Morgan's lab discovered gene linkage (genes on the same chromosome tend to be inherited together) and mapped the first gene locations, earning him the Nobel Prize in 1933.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">The Molecular Era (1940s–1970s)</h4>
       <p style="margin:0 0 8px;">By the 1940s, scientists knew genes existed and were carried on chromosomes — but chromosomes are made of both DNA and protein, and most scientists assumed the more "complex-looking" protein must be the genetic material, not the comparatively simple DNA. Three experiments changed that assumption completely.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Griffith's experiment (1928):</strong> Frederick Griffith showed that a harmless strain of bacteria could be "transformed" into a deadly strain using material from dead deadly bacteria — proving some "transforming principle" existed, without identifying what it was.</li>
         <li><strong>Avery-MacLeod-McCarty experiment (1944):</strong> this trio identified Griffith's mysterious transforming principle as DNA, not protein — the first direct evidence that DNA was the genetic material.</li>
         <li><strong>Hershey-Chase experiment (1952):</strong> using radioactively labeled viruses (bacteriophages), Alfred Hershey and Martha Chase confirmed that only the DNA of a virus enters a bacterial cell to direct infection, while the protein coat stays outside — settling the debate for good.</li>
       </ul>
       <p style="margin:10px 0 0;">Then, in 1953, <strong>James Watson and Francis Crick</strong> published the double-helix structure of DNA in the journal <em>Nature</em>, using critical X-ray diffraction data (including the famous "Photo 51") produced by <strong>Rosalind Franklin</strong> and Maurice Wilkins. This single discovery explained, for the first time, exactly how DNA could copy itself and store information — and it opened the door to modern molecular biology.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">The Genomic Era (1970s–Present)</h4>
       <p style="margin:0 0 8px;">Knowing DNA's structure was only the beginning. The next challenge was reading and editing it.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>1972–1973:</strong> Paul Berg, and separately Herbert Boyer and Stanley Cohen, developed recombinant DNA technology — the ability to cut and paste DNA from different organisms, the true birth of genetic engineering.</li>
         <li><strong>1977:</strong> Frederick Sanger developed a practical method for reading (sequencing) a DNA strand letter by letter, known as Sanger sequencing — used for decades afterward.</li>
         <li><strong>1983:</strong> Kary Mullis invented PCR (Polymerase Chain Reaction), allowing scientists to make millions of copies of a specific DNA segment in a few hours, from just a tiny starting sample.</li>
         <li><strong>1990–2003:</strong> the Human Genome Project, an international effort, successfully mapped essentially all 3 billion base pairs of human DNA.</li>
         <li><strong>2012:</strong> Jennifer Doudna and Emmanuelle Charpentier (with contributions from Feng Zhang) adapted a bacterial immune defense system, CRISPR-Cas9, into a precise gene-editing tool — a discovery that won the 2020 Nobel Prize in Chemistry.</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Timeline of Genetics — Visual Summary</h4>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff;">
         <div style="display:flex; flex-direction:column; gap:0;">

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">1866</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:26px;"></div></div>
             <div style="font-size:13px; padding-bottom:14px;">Mendel publishes the Laws of Inheritance</div>
           </div>

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">1900</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:26px;"></div></div>
             <div style="font-size:13px; padding-bottom:14px;">Mendel's work rediscovered by de Vries, Correns &amp; von Tschermak</div>
           </div>

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">1902</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:26px;"></div></div>
             <div style="font-size:13px; padding-bottom:14px;">Sutton &amp; Boveri propose the Chromosome Theory</div>
           </div>

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">1944</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:26px;"></div></div>
             <div style="font-size:13px; padding-bottom:14px;">Avery, MacLeod &amp; McCarty prove DNA is the genetic material</div>
           </div>

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">1953</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:26px;"></div></div>
             <div style="font-size:13px; padding-bottom:14px;">Watson &amp; Crick describe the DNA double helix</div>
           </div>

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">1983</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:26px;"></div></div>
             <div style="font-size:13px; padding-bottom:14px;">Mullis invents PCR</div>
           </div>

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">2003</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:26px;"></div></div>
             <div style="font-size:13px; padding-bottom:14px;">Human Genome Project completed</div>
           </div>

           <div style="display:flex; gap:12px;">
             <div style="width:60px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">2012</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--coral);"></div></div>
             <div style="font-size:13px;">CRISPR-Cas9 adapted into a gene-editing tool</div>
           </div>

         </div>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Classical Era vs Molecular Era vs Genomic Era</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Classical Era</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Molecular Era</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Genomic Era</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Time period</td><td style="padding:8px 10px; border:1px solid var(--line);">1860s–1940s</td><td style="padding:8px 10px; border:1px solid var(--line);">1940s–1970s</td><td style="padding:8px 10px; border:1px solid var(--line);">1970s–present</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Key focus</td><td style="padding:8px 10px; border:1px solid var(--line);">Traits and chromosomes</td><td style="padding:8px 10px; border:1px solid var(--line);">DNA structure and function</td><td style="padding:8px 10px; border:1px solid var(--line);">Whole genomes, gene editing</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Key figures</td><td style="padding:8px 10px; border:1px solid var(--line);">Mendel, Sutton, Morgan</td><td style="padding:8px 10px; border:1px solid var(--line);">Avery, Watson &amp; Crick</td><td style="padding:8px 10px; border:1px solid var(--line);">Sanger, Mullis, Doudna &amp; Charpentier</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Key tool</td><td style="padding:8px 10px; border:1px solid var(--line);">Breeding experiments, microscope</td><td style="padding:8px 10px; border:1px solid var(--line);">X-ray diffraction, radiolabeling</td><td style="padding:8px 10px; border:1px solid var(--line);">PCR, sequencing, CRISPR</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Why Studying This History Actually Matters</h4>
       <p style="margin:0 0 8px;">It's tempting to skip history and jump straight to "the facts," but the story matters for a practical reason: almost every technique used in modern biotechnology labs is named after — or directly descended from — one of these historical experiments. When you use PCR in a lab next semester, you are literally repeating a simplified version of Kary Mullis's 1983 discovery.</p>
       <div style="margin:0; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Important</span>
         <p style="margin:6px 0 0; font-size:14px;">Exams frequently ask you to match a scientist to their discovery and year. Learning the story behind each discovery (why they did the experiment, what problem they were solving) makes these details far easier to recall than memorizing a bare list of names and dates.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Applications Rooted in Genetics History</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Industrial applications:</strong> recombinant DNA technology (1970s) is the direct ancestor of today's industrial-scale production of enzymes, biofuels, and pharmaceuticals using engineered bacteria and yeast.</li>
         <li><strong>Agricultural applications:</strong> the same recombinant DNA techniques led to genetically modified crops, while Mendel's original breeding principles still guide traditional plant and animal breeding programs today.</li>
         <li><strong>Medical applications:</strong> PCR (from 1983) is now the backbone of most modern diagnostic tests, including COVID-19 testing; CRISPR (from 2012) is being trialed to correct genetic diseases directly at the DNA level.</li>
       </ul>
       <div style="margin:10px 0 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Clinical Point</span>
         <p style="margin:6px 0 0; font-size:14px;">Genetic counseling as a clinical service (covered later in this unit) only became possible once the chromosomal and molecular eras explained exactly which gene or chromosome abnormality causes a given disorder — before that, doctors could only observe that a disease "ran in the family" without knowing why.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Interesting Facts &amp; Common Mistakes</h4>
       <div style="margin:0 0 10px; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">Mendel was also a physics and mathematics enthusiast before joining the monastery — this mathematical training is likely why he was the first person to count and analyze inheritance ratios numerically, instead of just describing traits in words like everyone before him.</p>
       </div>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Thinking Mendel's discovery was immediately accepted — it was ignored for 34 years</li>
         <li>Believing Darwin and Mendel worked together — they were contemporaries but never collaborated, and Darwin's own theory of pangenesis was actually incorrect</li>
         <li>Assuming DNA's role was accepted as soon as it was structurally described in 1953 — its role as the genetic material was actually proven earlier, in 1944, by Avery, MacLeod &amp; McCarty; 1953 only explained its structure</li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember the four eras in order with "M-C-M-G": <strong>M</strong>endel (traits) → <strong>C</strong>hromosome theory (location) → <strong>M</strong>olecular biology (DNA structure) → <strong>G</strong>enomic era (reading and editing DNA).</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>Early ideas like blending inheritance, preformationism, and pangenesis were reasonable guesses but scientifically incorrect</li>
         <li>Mendel's 1860s pea experiments gave genetics its first mathematical laws, but were ignored until 1900</li>
         <li>Sutton and Boveri linked Mendel's abstract "units" to physical chromosomes in 1902; Morgan proved it experimentally using fruit flies</li>
         <li>Griffith, Avery-MacLeod-McCarty, and Hershey-Chase together established that DNA — not protein — is the genetic material</li>
         <li>Watson and Crick described DNA's double-helix structure in 1953, using Rosalind Franklin's X-ray data</li>
         <li>The genomic era brought recombinant DNA technology, DNA sequencing, PCR, the Human Genome Project, and CRISPR</li>
         <li>Nearly every modern biotechnology tool traces back to one of these historical discoveries</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Blending inheritance:</strong> the disproven idea that offspring traits are a blend of parental traits</li>
         <li><strong>Pangenesis:</strong> Darwin's disproven theory that body organs send hereditary particles to reproductive cells</li>
         <li><strong>Transformation:</strong> the uptake of external genetic material by a cell, changing its properties (seen in Griffith's experiment)</li>
         <li><strong>Recombinant DNA:</strong> DNA formed by joining segments from two different sources</li>
         <li><strong>Sequencing:</strong> the process of determining the exact order of nucleotides in a DNA strand</li>
         <li><strong>Genome project:</strong> a large-scale effort to determine the complete DNA sequence of an organism</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>What is blending inheritance, and why is it incorrect?</li>
         <li>Why was Mendel's work ignored for 34 years?</li>
         <li>Who proposed the Chromosome Theory of Inheritance, and in what year?</li>
         <li>What did the Hershey-Chase experiment prove, and how?</li>
         <li>What critical evidence did Rosalind Franklin contribute to the discovery of DNA's structure?</li>
         <li>Name one discovery each from the chromosomal, molecular, and genomic eras.</li>
         <li>Why is PCR considered such an important genomic-era discovery?</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Describe the major milestones in the history of genetics from Mendel to the genomic era.</li>
         <li>Explain the experiments that established DNA as the genetic material.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Write a short note on the Chromosome Theory of Inheritance.</li>
         <li>Discuss the significance of the Hershey-Chase experiment.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Who discovered PCR, and in which year?</li>
         <li>Define pangenesis.</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Darwin's disproven theory of heredity was called: <strong>(a)</strong> Preformationism <strong>(b)</strong> Pangenesis <strong>(c)</strong> Blending inheritance <strong>(d)</strong> Chromosome theory <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The Chromosome Theory of Inheritance was proposed by: <strong>(a)</strong> Watson &amp; Crick <strong>(b)</strong> Mendel <strong>(c)</strong> Sutton &amp; Boveri <strong>(d)</strong> Morgan <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Thomas Hunt Morgan's key experimental organism was: <strong>(a)</strong> Pea plant <strong>(b)</strong> Fruit fly <strong>(c)</strong> Bacteria <strong>(d)</strong> Mouse <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>DNA was proven to be the genetic material by: <strong>(a)</strong> Watson &amp; Crick <strong>(b)</strong> Avery, MacLeod &amp; McCarty <strong>(c)</strong> Morgan <strong>(d)</strong> Mendel <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The Hershey-Chase experiment used which organism to prove DNA is genetic material? <strong>(a)</strong> Bacteriophage <strong>(b)</strong> Fruit fly <strong>(c)</strong> Pea plant <strong>(d)</strong> Yeast <br><em style="color:var(--teal);">Answer: (a)</em></li>
         <li>PCR was invented by: <strong>(a)</strong> Frederick Sanger <strong>(b)</strong> Kary Mullis <strong>(c)</strong> Paul Berg <strong>(d)</strong> Jennifer Doudna <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The Human Genome Project was completed in: <strong>(a)</strong> 1990 <strong>(b)</strong> 2000 <strong>(c)</strong> 2003 <strong>(d)</strong> 2012 <br><em style="color:var(--teal);">Answer: (c)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Did Darwin and Mendel know about each other's work?</strong><br>They were contemporaries, but there's no strong evidence Darwin read Mendel's 1866 paper — if he had, his own (incorrect) theory of pangenesis might have looked very different.</p>
       <p style="margin:0 0 8px;"><strong>Q: Why does Rosalind Franklin matter if Watson and Crick got the Nobel Prize?</strong><br>Her X-ray diffraction images provided essential physical evidence for the helical structure — without "Photo 51," Watson and Crick's model would have been much harder to confirm. She died in 1958, and the Nobel Prize is only awarded to living scientists, so she could not be included in the 1962 award.</p>
       <p style="margin:0;"><strong>Q: Is genetics history still being written today?</strong><br>Yes — technologies like CRISPR-based gene editing and rapid, low-cost genome sequencing are still actively developing, meaning today's students are studying a field whose "modern era" is still being written.</p>`,

      /* ===================== TOPIC 3 — MENDEL AND MENDEL'S LAWS ===================== */

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 3 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">Mendel and Mendel's Laws</h4>
       <p style="margin:0 0 10px;">Suppose you cross a tall pea plant with a short pea plant. Common sense might suggest you'd get a medium-height plant — a "blend" of the two. But that is not what happens. Every single offspring plant turns out tall. Then, if you let those tall offspring self-pollinate, some of their offspring are suddenly short again — appearing out of nowhere, in a precise ratio of 3 tall to 1 short. This strange, very specific pattern is exactly what Gregor Mendel observed, and explaining it gave the world its first real laws of heredity.</p>
       <div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">Mendel's Laws are three fundamental principles of inheritance — the Law of Dominance, the Law of Segregation, and the Law of Independent Assortment — describing how traits are passed from parents to offspring through discrete, unchanging hereditary units (now known as genes).</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Why Mendel Chose Pea Plants (and Why It Worked)</h4>
       <p style="margin:0 0 8px;">Mendel's genius wasn't just the counting — it was choosing the right organism to count in the first place. Garden peas (<em>Pisum sativum</em>) had several practical advantages that made his discovery possible:</p>
       <ul style="margin:0; padding-left:18px;">
         <li>They have clear, easily distinguished traits (e.g. round vs wrinkled seeds, purple vs white flowers) with no confusing in-between forms</li>
         <li>They can self-pollinate naturally, letting Mendel obtain "true-breeding" lines (plants that always produce offspring identical to themselves for a trait)</li>
         <li>They can also be cross-pollinated by hand, giving Mendel full control over which plants mated with which</li>
         <li>They produce many seeds per generation and grow quickly, giving Mendel enough data to spot mathematical ratios</li>
       </ul>
       <p style="margin:10px 0 0;">Mendel studied seven traits in total, each with two clearly opposite forms: seed shape (round/wrinkled), seed color (yellow/green), flower color (purple/white), pod shape, pod color, flower position, and plant height (tall/short).</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Key Terms You Need Before the Laws Make Sense</h4>
       <p style="margin:0 0 8px;">Mendel didn't use these exact words (they came later), but modern genetics explains his laws using this vocabulary — learn these first, or the laws below won't click.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Gene:</strong> a unit of heredity that controls a trait (e.g. the gene for flower color)</li>
         <li><strong>Allele:</strong> a specific version of a gene (e.g. the "purple" allele or the "white" allele of the flower-color gene)</li>
         <li><strong>Dominant allele:</strong> an allele whose effect shows up in the offspring even if only one copy is present (usually written with a capital letter, e.g. <strong>T</strong>)</li>
         <li><strong>Recessive allele:</strong> an allele whose effect is hidden unless two copies are present (usually written with a lowercase letter, e.g. <strong>t</strong>)</li>
         <li><strong>Genotype:</strong> the actual genetic makeup of an organism (e.g. TT, Tt, or tt)</li>
         <li><strong>Phenotype:</strong> the physically observable trait that results from the genotype (e.g. "tall" or "short")</li>
         <li><strong>Homozygous:</strong> having two identical alleles for a gene (TT or tt)</li>
         <li><strong>Heterozygous:</strong> having two different alleles for a gene (Tt)</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Genotype vs Phenotype</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Genotype</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Phenotype</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">What it means</td><td style="padding:8px 10px; border:1px solid var(--line);">The genetic makeup (which alleles are present)</td><td style="padding:8px 10px; border:1px solid var(--line);">The visible, observable trait</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Can you see it directly?</td><td style="padding:8px 10px; border:1px solid var(--line);">No — needs genetic testing</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes — visible to the eye</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Example</td><td style="padding:8px 10px; border:1px solid var(--line);">Tt (heterozygous)</td><td style="padding:8px 10px; border:1px solid var(--line);">Tall</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Same phenotype, different genotype?</td><td style="padding:8px 10px; border:1px solid var(--line);">TT and Tt look different genetically</td><td style="padding:8px 10px; border:1px solid var(--line);">But both TT and Tt look "tall"</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Law 1: Law of Dominance</h4>
       <p style="margin:0 0 8px;">When Mendel crossed a true-breeding tall plant (TT) with a true-breeding short plant (tt), every single offspring in that first generation (called the F1 generation) was tall — not medium height. This showed that the "tall" allele was <strong>dominant</strong> over the "short" allele, which was <strong>recessive</strong> — masked completely in the presence of the dominant allele, but not destroyed or blended away.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; align-items:center; justify-content:center; gap:14px; min-width:380px;">
           <div style="text-align:center;">
             <div style="padding:8px 14px; background:var(--teal-soft); border-radius:8px; font-size:13px; font-weight:600; color:var(--teal-deep);">TT (Tall)</div>
             <div style="font-size:11px; color:var(--ink-soft); margin-top:4px;">Parent 1</div>
           </div>
           <div style="font-size:20px; color:var(--ink-soft);">×</div>
           <div style="text-align:center;">
             <div style="padding:8px 14px; background:var(--coral-soft); border-radius:8px; font-size:13px; font-weight:600; color:#A8402C;">tt (Short)</div>
             <div style="font-size:11px; color:var(--ink-soft); margin-top:4px;">Parent 2</div>
           </div>
         </div>
         <div style="display:flex; justify-content:center; margin:10px 0;"><div style="font-size:18px; color:var(--ink-soft);">↓</div></div>
         <div style="display:flex; justify-content:center;">
           <div style="text-align:center;">
             <div style="padding:8px 18px; background:var(--teal-soft); border-radius:8px; font-size:13px; font-weight:600; color:var(--teal-deep);">Tt (Tall) — 100% of F1</div>
             <div style="font-size:11px; color:var(--ink-soft); margin-top:4px;">All offspring are tall, but carry a hidden "short" allele</div>
           </div>
         </div>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Law 2: Law of Segregation</h4>
       <p style="margin:0 0 8px;">The Law of Segregation states that the two alleles for a gene separate (segregate) from each other during gamete formation, so each gamete (sperm or egg / pollen or ovule) carries only <strong>one</strong> allele for that gene, not both.</p>
       <p style="margin:0 0 8px;"><strong>Step-by-step mechanism:</strong></p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Step 1:</strong> A heterozygous plant (Tt) has one "T" allele and one "t" allele, located on a pair of homologous chromosomes</li>
         <li><strong>Step 2:</strong> During meiosis (the cell division that forms gametes), homologous chromosomes separate from each other</li>
         <li><strong>Step 3:</strong> As a result, half the gametes produced carry the "T" allele, and the other half carry the "t" allele — never both in the same gamete</li>
         <li><strong>Step 4:</strong> At fertilization, each offspring randomly receives one allele from each parent, restoring the paired (diploid) condition</li>
       </ul>
       <p style="margin:10px 0 0;">This is exactly why the "short" trait could disappear in the F1 generation and then reappear in the F2 generation — the recessive "t" allele was never destroyed, just hidden, quietly segregating into gametes and waiting for a chance to pair up with another "t" allele.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Monohybrid Cross — F1 × F1 (Tt × Tt)</h4>
       <p style="margin:0 0 10px;">When Mendel let the F1 tall plants (Tt) self-pollinate, the F2 generation showed a 3:1 ratio — 3 tall plants for every 1 short plant. A Punnett square shows exactly why.</p>
       <div style="overflow-x:auto; margin:10px 0;">
         <table style="border-collapse:collapse; margin:0 auto; font-size:13px; min-width:280px;">
           <tr>
             <td style="width:60px; border:1px solid var(--line); background:var(--panel);"></td>
             <td style="width:60px; text-align:center; padding:8px; border:1px solid var(--line); background:var(--teal-soft); font-weight:600;">T</td>
             <td style="width:60px; text-align:center; padding:8px; border:1px solid var(--line); background:var(--coral-soft); font-weight:600;">t</td>
           </tr>
           <tr>
             <td style="text-align:center; padding:8px; border:1px solid var(--line); background:var(--teal-soft); font-weight:600;">T</td>
             <td style="text-align:center; padding:8px; border:1px solid var(--line);">TT<br><span style="font-size:11px; color:var(--ink-soft);">Tall</span></td>
             <td style="text-align:center; padding:8px; border:1px solid var(--line);">Tt<br><span style="font-size:11px; color:var(--ink-soft);">Tall</span></td>
           </tr>
           <tr>
             <td style="text-align:center; padding:8px; border:1px solid var(--line); background:var(--coral-soft); font-weight:600;">t</td>
             <td style="text-align:center; padding:8px; border:1px solid var(--line);">Tt<br><span style="font-size:11px; color:var(--ink-soft);">Tall</span></td>
             <td style="text-align:center; padding:8px; border:1px solid var(--line);">tt<br><span style="font-size:11px; color:var(--ink-soft);">Short</span></td>
           </tr>
         </table>
       </div>
       <p style="margin:0;">Reading the grid: 1 TT (tall) + 2 Tt (tall) + 1 tt (short) = a <strong>genotypic ratio</strong> of 1:2:1, but a <strong>phenotypic ratio</strong> of 3:1 (tall:short) — since both TT and Tt look identically tall.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Law 3: Law of Independent Assortment</h4>
       <p style="margin:0 0 8px;">This law states that alleles of <em>different</em> genes separate independently of one another during gamete formation — in other words, which allele you get for seed color has no effect on which allele you get for seed shape. Mendel tested this using a <strong>dihybrid cross</strong>, tracking two traits at once: seed shape (round R, wrinkled r) and seed color (yellow Y, green y).</p>
       <p style="margin:0;">Crossing a plant that was RRYY (round, yellow) with one that was rryy (wrinkled, green) gave an F1 generation that was entirely RrYy (round, yellow). Self-pollinating those F1 plants gave an F2 generation in a very specific ratio: <strong>9 round-yellow : 3 round-green : 3 wrinkled-yellow : 1 wrinkled-green</strong> — proving the two traits were inherited independently rather than always staying linked together.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Dihybrid Cross — RrYy × RrYy (9:3:3:1 Ratio)</h4>
       <div style="overflow-x:auto; margin:10px 0;">
         <table style="border-collapse:collapse; margin:0 auto; font-size:11.5px; min-width:480px;">
           <tr>
             <td style="width:50px; border:1px solid var(--line); background:var(--panel);"></td>
             <td style="width:50px; text-align:center; padding:6px; border:1px solid var(--line); background:var(--teal-soft); font-weight:600;">RY</td>
             <td style="width:50px; text-align:center; padding:6px; border:1px solid var(--line); background:var(--teal-soft); font-weight:600;">Ry</td>
             <td style="width:50px; text-align:center; padding:6px; border:1px solid var(--line); background:var(--teal-soft); font-weight:600;">rY</td>
             <td style="width:50px; text-align:center; padding:6px; border:1px solid var(--line); background:var(--teal-soft); font-weight:600;">ry</td>
           </tr>
           <tr>
             <td style="text-align:center; padding:6px; border:1px solid var(--line); background:var(--coral-soft); font-weight:600;">RY</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RRYY</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RRYy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RrYY</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RrYy</td>
           </tr>
           <tr>
             <td style="text-align:center; padding:6px; border:1px solid var(--line); background:var(--coral-soft); font-weight:600;">Ry</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RRYy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RRyy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RrYy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">Rryy</td>
           </tr>
           <tr>
             <td style="text-align:center; padding:6px; border:1px solid var(--line); background:var(--coral-soft); font-weight:600;">rY</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RrYY</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RrYy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">rrYY</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">rrYy</td>
           </tr>
           <tr>
             <td style="text-align:center; padding:6px; border:1px solid var(--line); background:var(--coral-soft); font-weight:600;">ry</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">RrYy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">Rryy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">rrYy</td>
             <td style="text-align:center; padding:6px; border:1px solid var(--line);">rryy</td>
           </tr>
         </table>
       </div>
       <p style="margin:0;">Out of these 16 combinations: 9 show round-yellow, 3 show round-green, 3 show wrinkled-yellow, and 1 shows wrinkled-green — the classic <strong>9:3:3:1</strong> dihybrid ratio.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Test Cross — How to Find a Hidden Genotype</h4>
       <p style="margin:0 0 8px;">A problem: a tall pea plant could be either TT or Tt — you cannot tell just by looking at it, since both genotypes produce the same "tall" phenotype. A <strong>test cross</strong> solves this by crossing the unknown plant with a homozygous recessive plant (tt).</p>
       <ul style="margin:0; padding-left:18px;">
         <li>If the unknown plant is <strong>TT</strong>: all offspring will be Tt (tall) — 100% tall, 0% short</li>
         <li>If the unknown plant is <strong>Tt</strong>: offspring will split 1:1 into Tt (tall) and tt (short) — 50% tall, 50% short</li>
       </ul>
       <div style="margin:10px 0 0; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Exam Point</span>
         <p style="margin:6px 0 0; font-size:14px;">A test cross always uses the homozygous <em>recessive</em> genotype as the known parent — this is because the recessive parent contributes only recessive alleles, so any dominant trait appearing in the offspring must have come from the unknown parent, cleanly revealing its genotype.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Dominant vs Recessive</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Dominant Allele</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Recessive Allele</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Symbol used</td><td style="padding:8px 10px; border:1px solid var(--line);">Capital letter (e.g. T)</td><td style="padding:8px 10px; border:1px solid var(--line);">Lowercase letter (e.g. t)</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Expressed when</td><td style="padding:8px 10px; border:1px solid var(--line);">Present in one or two copies</td><td style="padding:8px 10px; border:1px solid var(--line);">Present in two copies only</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Masked by the other allele?</td><td style="padding:8px 10px; border:1px solid var(--line);">No — it does the masking</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes — hidden in heterozygotes</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Example (human)</td><td style="padding:8px 10px; border:1px solid var(--line);">Free earlobes</td><td style="padding:8px 10px; border:1px solid var(--line);">Attached earlobes</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Importance &amp; Applications</h4>
       <p style="margin:0 0 8px;">Mendel's laws are not just historical curiosities — they are working tools still used today.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Biotechnology application:</strong> predicting how a genetically engineered trait (like herbicide resistance in a crop) will be inherited across future generations of plants</li>
         <li><strong>Agricultural applications:</strong> plant and animal breeders use test crosses and Punnett squares to plan crosses that produce desired combinations of traits</li>
         <li><strong>Medical applications:</strong> Mendelian ratios are the basis for predicting the chance that a couple's child will inherit a genetic disorder caused by a single gene</li>
       </ul>
       <div style="margin:10px 0 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Clinical Point</span>
         <p style="margin:6px 0 0; font-size:14px;">Many single-gene human disorders, such as cystic fibrosis, follow a simple recessive Mendelian pattern — two carrier parents (each heterozygous) have a 25% (1 in 4) chance of having an affected child, exactly matching the 3:1 ratio Mendel first observed in pea plants.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Advantages &amp; Limitations of Mendelian Genetics</h4>
       <p style="margin:0 0 8px;"><strong>Advantages:</strong> Mendel's laws provide a simple, predictable, mathematical framework that correctly explains a huge number of traits, and they gave genetics its first solid scientific foundation.</p>
       <p style="margin:0 0 8px;"><strong>Limitations:</strong> Mendel happened to choose traits that behave in the simplest possible way — but not all inheritance is this clean. His laws don't fully explain:</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Incomplete dominance</strong> — where the heterozygote shows a blended, in-between phenotype (e.g. a red flower × white flower producing pink offspring)</li>
         <li><strong>Codominance</strong> — where both alleles are fully expressed at the same time, side by side, rather than blending (e.g. AB blood group)</li>
         <li><strong>Polygenic traits</strong> — traits like human height or skin color, controlled by many genes acting together, not just one</li>
         <li><strong>Linked genes</strong> — genes located close together on the same chromosome that don't assort independently, contradicting Law 3 (covered later in this unit under Linkage)</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Incomplete Dominance vs Codominance</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Incomplete Dominance</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Codominance</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Heterozygote phenotype</td><td style="padding:8px 10px; border:1px solid var(--line);">A blended, intermediate trait</td><td style="padding:8px 10px; border:1px solid var(--line);">Both traits shown fully, side by side</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Example</td><td style="padding:8px 10px; border:1px solid var(--line);">Red × White snapdragon → Pink</td><td style="padding:8px 10px; border:1px solid var(--line);">Human blood group AB (A and B both expressed)</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Are alleles "blended" chemically?</td><td style="padding:8px 10px; border:1px solid var(--line);">No — both alleles are still passed on unchanged</td><td style="padding:8px 10px; border:1px solid var(--line);">No — both alleles are fully and separately active</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Modern Developments &amp; Interesting Facts</h4>
       <p style="margin:0 0 8px;">Modern molecular biology has since explained exactly <em>why</em> Mendel's laws work: genes are physical segments of DNA located on chromosomes, and the Law of Segregation simply describes how homologous chromosomes separate during meiosis. Mendel described the pattern perfectly in the 1860s — he just had no way of knowing the physical explanation behind it.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">Some statisticians have noted that Mendel's data matches his proposed ratios almost <em>too</em> perfectly for pure chance — a famous observation made by statistician R. A. Fisher in 1936. This doesn't mean Mendel faked results; most historians believe he may have unconsciously stopped counting once a batch "looked about right," or had some help from an assistant.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Common Mistakes Students Make</h4>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Writing a recessive genotype as a single lowercase letter (like "t") instead of two ("tt") — recessive traits always need <em>two</em> copies to show</li>
         <li>Assuming a 3:1 ratio applies to every cross — it only applies to a monohybrid cross between two heterozygotes (Tt × Tt)</li>
         <li>Confusing genotypic ratio (1:2:1) with phenotypic ratio (3:1) in a monohybrid cross — they are not the same number</li>
         <li>Forgetting that a test cross parent must be fully homozygous recessive, not just "short" in appearance</li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember the three laws with "D-S-I": <strong>D</strong>ominance (one allele hides the other) → <strong>S</strong>egregation (alleles split apart into separate gametes) → <strong>I</strong>ndependent assortment (different genes shuffle independently of each other).</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>Mendel used garden pea plants because they have clear traits, self-pollinate, and produce many offspring quickly</li>
         <li>Law of Dominance: one allele can mask the presence of another in a heterozygote</li>
         <li>Law of Segregation: the two alleles of a gene separate into different gametes during meiosis</li>
         <li>Law of Independent Assortment: alleles of different genes are inherited independently of each other</li>
         <li>A monohybrid cross (Tt × Tt) gives a 3:1 phenotypic ratio and a 1:2:1 genotypic ratio</li>
         <li>A dihybrid cross (RrYy × RrYy) gives a 9:3:3:1 phenotypic ratio</li>
         <li>A test cross (unknown × homozygous recessive) reveals whether an organism is homozygous or heterozygous dominant</li>
         <li>Exceptions like incomplete dominance, codominance, polygenic traits, and linkage go beyond simple Mendelian patterns</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>True-breeding:</strong> a line of organisms that always produces offspring identical to the parent for a given trait</li>
         <li><strong>F1 generation:</strong> the first filial (offspring) generation from a cross</li>
         <li><strong>F2 generation:</strong> the second filial generation, from self- or cross-pollinating the F1</li>
         <li><strong>Monohybrid cross:</strong> a genetic cross tracking only one trait</li>
         <li><strong>Dihybrid cross:</strong> a genetic cross tracking two traits at once</li>
         <li><strong>Punnett square:</strong> a grid used to predict the possible genotypes of offspring from a cross</li>
         <li><strong>Test cross:</strong> a cross with a homozygous recessive individual, used to reveal an unknown genotype</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Why did Mendel choose the garden pea for his experiments?</li>
         <li>State the Law of Dominance in your own words.</li>
         <li>What actually happens to alleles during the Law of Segregation, at the level of the cell?</li>
         <li>What phenotypic ratio results from a monohybrid cross between two heterozygotes?</li>
         <li>What phenotypic ratio results from a dihybrid cross between two double heterozygotes?</li>
         <li>Why must the known parent in a test cross always be homozygous recessive?</li>
         <li>Give one exception to Mendel's laws, and briefly explain why it doesn't fit.</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>State and explain Mendel's three laws of inheritance with suitable examples.</li>
         <li>Explain a dihybrid cross with a Punnett square and derive the 9:3:3:1 ratio.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>What is a test cross? Explain with an example.</li>
         <li>Differentiate between genotype and phenotype.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Define dominant and recessive allele.</li>
         <li>What is the phenotypic ratio of a monohybrid cross?</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Mendel's experiments were conducted on: <strong>(a)</strong> Fruit flies <strong>(b)</strong> Garden pea <strong>(c)</strong> Mice <strong>(d)</strong> Bacteria <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The phenotypic ratio of a monohybrid cross (Tt × Tt) is: <strong>(a)</strong> 1:1 <strong>(b)</strong> 1:2:1 <strong>(c)</strong> 3:1 <strong>(d)</strong> 9:3:3:1 <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>The genotypic ratio of a monohybrid cross (Tt × Tt) is: <strong>(a)</strong> 3:1 <strong>(b)</strong> 1:2:1 <strong>(c)</strong> 1:1 <strong>(d)</strong> 9:3:3:1 <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The Law of Segregation describes the separation of: <strong>(a)</strong> Chromosomes into different cells <strong>(b)</strong> Alleles of the same gene into different gametes <strong>(c)</strong> Species over time <strong>(d)</strong> Genes on different chromosomes only <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>A dihybrid cross between two heterozygotes gives a phenotypic ratio of: <strong>(a)</strong> 3:1 <strong>(b)</strong> 1:2:1 <strong>(c)</strong> 9:3:3:1 <strong>(d)</strong> 1:1:1:1 <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>In a test cross, the unknown genotype is crossed with: <strong>(a)</strong> A homozygous dominant individual <strong>(b)</strong> A homozygous recessive individual <strong>(c)</strong> Another unknown individual <strong>(d)</strong> Itself <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Pink flowers from a red × white cross is an example of: <strong>(a)</strong> Codominance <strong>(b)</strong> Law of Dominance <strong>(c)</strong> Incomplete dominance <strong>(d)</strong> Independent assortment <br><em style="color:var(--teal);">Answer: (c)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Did Mendel know his "hereditary units" were genes made of DNA?</strong><br>No — Mendel had no concept of DNA or chromosomes. He inferred the existence of "unit factors" (now called genes) purely from the mathematical ratios in his data.</p>
       <p style="margin:0 0 8px;"><strong>Q: Why does the recessive trait "disappear" in the F1 generation but reappear in F2?</strong><br>It never actually disappears — it is simply masked in the heterozygous Tt genotype. Once two Tt individuals are crossed, there's a chance of pairing two recessive alleles together (tt), letting the trait reappear.</p>
       <p style="margin:0;"><strong>Q: Do all traits follow Mendel's laws exactly?</strong><br>No — many traits involve incomplete dominance, codominance, multiple genes (polygenic inheritance), or genes linked on the same chromosome, all of which produce patterns Mendel's original three laws don't fully cover on their own.</p>`,

      /* ===================== TOPIC 4 — CHROMOSOME THEORY OF INHERITANCE ===================== */

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 4 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">Chromosome Theory of Inheritance</h4>
       <p style="margin:0 0 10px;">Mendel worked out the mathematical rules of inheritance without ever knowing where, physically, those rules were being carried out inside a cell. For nearly 40 years after his experiments, "genes" (or "factors," as they were called then) were purely abstract — useful for predicting ratios, but with no known physical location. The Chromosome Theory of Inheritance is the idea that finally connected Mendel's invisible factors to a real, visible structure inside the cell: the chromosome.</p>
       <div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">The Chromosome Theory of Inheritance states that genes are located on chromosomes, and that the behavior of chromosomes during meiosis (their pairing and separation) is the physical basis for Mendel's laws of inheritance.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Historical Background &amp; Scientists Involved</h4>
       <p style="margin:0 0 8px;">By the early 1900s, cell biologists using improved microscopes could clearly see chromosomes condensing, pairing, and separating during cell division — but nobody had yet connected this visible behavior to Mendel's abstract "hereditary units." In 1902, two scientists working independently on completely different organisms noticed the same striking parallel.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Walter Sutton</strong> (USA), studying grasshopper sperm cells, observed that chromosomes exist in pairs, and that these pairs separate during meiosis, exactly as Mendel's factors were predicted to separate.</li>
         <li><strong>Theodor Boveri</strong> (Germany), studying sea urchin embryos, showed that a normal embryo needs a complete, correct set of chromosomes to develop properly — proving chromosomes carry real, essential hereditary information, not just decoration inside the cell.</li>
       </ul>
       <p style="margin:10px 0 0;">Their combined proposal became known as the <strong>Sutton-Boveri Chromosome Theory</strong>. But a theory needs experimental proof, not just a good parallel — and that proof came a few years later from <strong>Thomas Hunt Morgan</strong>, working with the fruit fly <em>Drosophila melanogaster</em> at Columbia University starting around 1910.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Morgan's Experiment — The White-Eyed Fly</h4>
       <p style="margin:0 0 8px;">Morgan's laboratory bred huge numbers of fruit flies, which normally have red eyes. One day, a single male fly appeared with white eyes — a spontaneous change (mutation) in a single individual. Morgan bred this white-eyed male with a normal red-eyed female and carefully tracked the eye color of every subsequent generation.</p>
       <ul style="margin:0; padding-left:18px;">
         <li>All the F1 offspring had red eyes (red is dominant) — consistent with simple Mendelian dominance so far</li>
         <li>But in the F2 generation, the white-eye trait appeared <strong>only in males</strong>, never in females — a pattern Mendel's original laws (based on traits unrelated to sex) could not explain</li>
       </ul>
       <p style="margin:0;">Morgan realized this pattern made perfect sense if the gene for eye color was located specifically on the <strong>X chromosome</strong>. Since males have only one X chromosome (XY) and females have two (XX), a recessive allele on the X chromosome behaves very differently in males versus females. This was the first solid experimental proof that a specific gene was physically located on a specific chromosome — direct, testable evidence for the Chromosome Theory.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">The Parallel Behavior — Why Chromosomes Fit Mendel's Laws So Well</h4>
       <p style="margin:0 0 10px;">The strongest evidence for the theory was simply how precisely chromosome behavior mirrored what Mendel's mathematics had already predicted, years before anyone could see a chromosome clearly.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; gap:14px; min-width:460px;">
           <div style="flex:1; padding:12px; background:var(--teal-soft); border-radius:8px;">
             <div style="font-size:12.5px; font-weight:600; color:var(--teal-deep); margin-bottom:8px;">Mendel's Abstract Factors (1866)</div>
             <ul style="margin:0; padding-left:16px; font-size:12.5px; color:var(--ink);">
               <li>Factors exist in pairs in an organism</li>
               <li>The two factors of a pair separate during gamete formation</li>
               <li>One factor from each parent is passed to offspring</li>
               <li>Different factor pairs assort independently</li>
             </ul>
           </div>
           <div style="flex:1; padding:12px; background:var(--coral-soft); border-radius:8px;">
             <div style="font-size:12.5px; font-weight:600; color:#A8402C; margin-bottom:8px;">Chromosomes Under the Microscope (1900s)</div>
             <ul style="margin:0; padding-left:16px; font-size:12.5px; color:var(--ink);">
               <li>Chromosomes exist in homologous pairs</li>
               <li>Homologous chromosomes separate during meiosis I</li>
               <li>One chromosome from each parent is passed to offspring</li>
               <li>Different chromosome pairs orient independently at metaphase I</li>
             </ul>
           </div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">Every abstract rule Mendel proposed had a matching, visible chromosome behavior</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Step-by-Step: How Chromosome Behavior Produces Mendelian Ratios</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Step 1:</strong> Before meiosis, each chromosome is duplicated, and homologous chromosomes (one from each parent) come together as pairs</li>
         <li><strong>Step 2:</strong> During meiosis I, each pair of homologous chromosomes lines up at the cell's equator, in a random orientation</li>
         <li><strong>Step 3:</strong> The two homologous chromosomes of each pair are pulled to opposite poles of the cell — this is the physical event behind the Law of Segregation</li>
         <li><strong>Step 4:</strong> Because different chromosome pairs orient independently of each other at Step 2, the combination of chromosomes going into each gamete is essentially random — this is the physical event behind the Law of Independent Assortment</li>
         <li><strong>Step 5:</strong> At fertilization, one set of chromosomes from each parent combines, restoring the paired condition in the offspring</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Importance of the Chromosome Theory</h4>
       <p style="margin:0 0 8px;">This theory did something enormous for biology: it turned genetics from a purely statistical, "black box" science into a physical, visible one. After 1915, scientists no longer had to just trust Mendel's ratios — they could locate genes on actual chromosomes, map their relative positions, and eventually connect specific chromosome abnormalities to specific human diseases.</p>
       <div style="margin:0; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Important</span>
         <p style="margin:6px 0 0; font-size:14px;">This theory is the direct bridge between classical genetics (Topic 3) and molecular genetics (later topics) — it doesn't tell you what a gene is chemically made of, but it tells you exactly where to go looking for the answer: the chromosome.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Applications</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Biotechnology application:</strong> gene mapping (locating a gene's approximate position on a chromosome) depends directly on this theory, and later became a stepping stone toward genome sequencing</li>
         <li><strong>Industrial applications:</strong> understanding which chromosome carries a gene of interest helps in selecting and engineering microbial strains for producing enzymes and biochemicals</li>
         <li><strong>Agricultural applications:</strong> plant and animal breeders use chromosome mapping to track desirable genes (e.g. disease resistance) across generations more precisely than phenotype observation alone</li>
         <li><strong>Medical applications:</strong> karyotyping (examining an individual's full set of chromosomes) is a direct, practical descendant of this theory, used to detect chromosomal disorders</li>
       </ul>
       <div style="margin:10px 0 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Clinical Point</span>
         <p style="margin:6px 0 0; font-size:14px;">Down syndrome (an extra copy of chromosome 21) and Turner syndrome (a missing X chromosome) are both directly explained by the Chromosome Theory — they occur when chromosomes fail to separate correctly during meiosis, a mistake called nondisjunction.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Advantages &amp; Limitations</h4>
       <p style="margin:0 0 8px;"><strong>Advantages:</strong> the theory gave genetics a physical, verifiable foundation, allowed genes to be mapped onto specific chromosomes, and correctly predicted sex-linked inheritance patterns before anyone understood DNA.</p>
       <p style="margin:0;"><strong>Limitations:</strong> the theory identifies <em>where</em> genes are located, but on its own it could not explain <em>what</em> a gene physically is, <em>how</em> it stores information, or <em>how</em> that information gets converted into a trait. Those answers only came later, with the discovery of DNA's role (1944) and structure (1953).</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Mendelian Factors vs Chromosomes — Direct Comparison</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Behavior</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Mendel's Factors</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Chromosomes</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Occur in pairs</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes, in diploid organisms</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes, as homologous pairs</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Separate during gamete formation</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes (Law of Segregation)</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes, during meiosis I</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">One copy passed per parent</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Directly observable</td><td style="padding:8px 10px; border:1px solid var(--line);">No — inferred from ratios only</td><td style="padding:8px 10px; border:1px solid var(--line);">Yes — visible under a microscope</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Modern Developments &amp; Interesting Facts</h4>
       <p style="margin:0 0 8px;">Today, the ideas Sutton, Boveri, and Morgan proposed are the foundation of <strong>cytogenetics</strong> — the study of chromosomes. Modern tools have made this far more precise: <strong>karyotyping</strong> arranges all of an individual's chromosomes by size and shape to spot abnormalities, and <strong>FISH (Fluorescence In Situ Hybridization)</strong> uses glowing molecular probes to pinpoint the exact location of a specific gene on a chromosome — something Sutton and Boveri could only infer indirectly.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">Morgan originally set out to disprove Mendelian genetics, not confirm it — he was skeptical that invisible "factors" could really exist. His own fruit fly data ended up convincing him otherwise, and he became one of Mendelian genetics' strongest supporters, winning the Nobel Prize in 1933.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Common Mistakes Students Make</h4>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Thinking Mendel and Sutton/Boveri worked at the same time — Mendel's work (1860s) predates the Chromosome Theory (1902) by about 40 years</li>
         <li>Assuming the Chromosome Theory explains what genes are chemically made of — it only explains their <em>location and behavior</em>, not their chemical identity (that came later, with DNA)</li>
         <li>Confusing Sutton and Boveri's proposal with Morgan's proof — Sutton and Boveri proposed the parallel; Morgan provided the first hard experimental evidence</li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember "S-B-M": <strong>S</strong>utton and <strong>B</strong>overi proposed it (1902), <strong>M</strong>organ proved it (1910s) — proposal before proof.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>The Chromosome Theory of Inheritance states that genes are located on chromosomes</li>
         <li>Proposed independently in 1902 by Walter Sutton and Theodor Boveri</li>
         <li>Experimentally proven by Thomas Hunt Morgan using the white-eyed fruit fly, which revealed X-linked inheritance</li>
         <li>Chromosome behavior during meiosis (pairing, then separating) mirrors Mendel's Laws of Segregation and Independent Assortment</li>
         <li>The theory explains gene location and behavior, but not gene chemistry — that required the later discovery of DNA</li>
         <li>Modern applications include karyotyping and FISH, both used to detect chromosomal disorders</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Homologous chromosomes:</strong> a matching pair of chromosomes, one from each parent, carrying genes for the same traits</li>
         <li><strong>Sex-linked gene:</strong> a gene located on a sex chromosome (X or Y)</li>
         <li><strong>Nondisjunction:</strong> the failure of chromosomes to separate properly during meiosis, leading to an abnormal chromosome number</li>
         <li><strong>Karyotype:</strong> a visual profile of all the chromosomes in a cell, arranged by size and shape</li>
         <li><strong>Cytogenetics:</strong> the branch of genetics that studies chromosomes, usually under a microscope</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Who proposed the Chromosome Theory of Inheritance, and in what year?</li>
         <li>What organism did Sutton study, and what organism did Boveri study?</li>
         <li>Describe Morgan's white-eyed fruit fly experiment and what it proved.</li>
         <li>How does chromosome behavior during meiosis explain the Law of Segregation?</li>
         <li>What could the Chromosome Theory NOT explain about genes?</li>
         <li>What is nondisjunction, and name one disorder it can cause.</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Describe the Chromosome Theory of Inheritance and the experimental evidence supporting it.</li>
         <li>Explain Morgan's experiment on <em>Drosophila</em> and its significance to genetics.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>How does the behavior of chromosomes during meiosis parallel Mendel's laws?</li>
         <li>Write a short note on nondisjunction and its consequences.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Who proposed the Chromosome Theory of Inheritance?</li>
         <li>Define homologous chromosomes.</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>The Chromosome Theory of Inheritance was proposed by: <strong>(a)</strong> Mendel <strong>(b)</strong> Watson &amp; Crick <strong>(c)</strong> Sutton &amp; Boveri <strong>(d)</strong> Avery, MacLeod &amp; McCarty <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Sutton studied chromosome behavior in: <strong>(a)</strong> Sea urchins <strong>(b)</strong> Grasshoppers <strong>(c)</strong> Fruit flies <strong>(d)</strong> Pea plants <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Morgan's experimental proof of the theory used: <strong>(a)</strong> Pea plants <strong>(b)</strong> Bacteria <strong>(c)</strong> Fruit flies <strong>(d)</strong> Mice <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>The white-eye trait in Morgan's flies was linked to the: <strong>(a)</strong> Y chromosome <strong>(b)</strong> X chromosome <strong>(c)</strong> Chromosome 21 <strong>(d)</strong> Autosome <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The Law of Segregation corresponds physically to which meiotic event? <strong>(a)</strong> DNA replication <strong>(b)</strong> Separation of homologous chromosomes <strong>(c)</strong> Crossing over only <strong>(d)</strong> Cytokinesis <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Down syndrome results from: <strong>(a)</strong> A gene mutation <strong>(b)</strong> Nondisjunction of chromosome 21 <strong>(c)</strong> A viral infection <strong>(d)</strong> Incomplete dominance <br><em style="color:var(--teal);">Answer: (b)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Is the Chromosome Theory the same as Mendel's laws?</strong><br>No — Mendel's laws describe the mathematical pattern of inheritance; the Chromosome Theory explains the physical, cellular reason those patterns occur.</p>
       <p style="margin:0 0 8px;"><strong>Q: Did Sutton and Boveri work together?</strong><br>No — they worked independently, in different countries, on completely different organisms, and arrived at the same conclusion around the same time (1902).</p>
       <p style="margin:0;"><strong>Q: Why was Morgan's fruit fly evidence considered stronger than Sutton and Boveri's observations?</strong><br>Because Morgan showed a specific, testable, predictable outcome (a sex-specific inheritance pattern) that matched exactly what the theory predicted — moving the idea from a reasonable parallel to confirmed experimental proof.</p>`,

      /* ===================== TOPIC 5 — GENE CONCEPT ===================== */

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 5 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">Gene Concept</h4>
       <p style="margin:0 0 10px;">By now you've used the word "gene" dozens of times in this unit — but what actually <em>is</em> a gene? The surprising answer is that the definition has changed several times over the last century, each time getting more precise as scientists learned more. A gene was first just a mathematical idea, then a location on a chromosome, and only much later a specific, physical stretch of DNA with a defined chemical structure. Understanding how this definition evolved is just as important as memorizing the final, modern one.</p>
       <div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">A gene is a specific segment of DNA (or, in some viruses, RNA) that contains the instructions to make a functional product — usually a protein, but sometimes a functional RNA molecule — and that occupies a fixed location (locus) on a chromosome.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Historical Background — How the Word "Gene" Was Born</h4>
       <p style="margin:0 0 8px;">Mendel never used the word "gene" — he called them "factors" (or, in his original German, <em>Elemente</em>). The actual word "gene" was coined in 1909 by the Danish botanist <strong>Wilhelm Johannsen</strong>, who also introduced the now-essential terms <strong>genotype</strong> and <strong>phenotype</strong>. Johannsen deliberately chose a vague, abstract word — he wanted a term that described "something" responsible for a trait, without claiming to know its physical or chemical nature, since in 1909 nobody did yet.</p>
       <p style="margin:0;">The concept then evolved through several distinct stages, each adding more precision as new experimental tools became available.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Evolution of the Gene Concept — Four Stages</h4>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff;">
         <div style="display:flex; flex-direction:column; gap:0;">
           <div style="display:flex; gap:12px;">
             <div style="width:110px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">Mendelian (1860s)</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:24px;"></div></div>
             <div style="font-size:13px; padding-bottom:12px;">An abstract "factor" controlling one trait — no physical location known</div>
           </div>
           <div style="display:flex; gap:12px;">
             <div style="width:110px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">Classical (1900s–1940s)</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:24px;"></div></div>
             <div style="font-size:13px; padding-bottom:12px;">A fixed location (locus) on a chromosome, treated as an indivisible unit</div>
           </div>
           <div style="display:flex; gap:12px;">
             <div style="width:110px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">Biochemical (1940s–1950s)</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--teal);"></div><div style="width:2px; flex:1; background:var(--line); min-height:24px;"></div></div>
             <div style="font-size:13px; padding-bottom:12px;">A unit of DNA that codes for one enzyme (the "one gene, one enzyme" idea)</div>
           </div>
           <div style="display:flex; gap:12px;">
             <div style="width:110px; flex-shrink:0; text-align:right; font-size:12px; font-weight:600; color:var(--teal-deep);">Modern (1950s–present)</div>
             <div style="display:flex; flex-direction:column; align-items:center;"><div style="width:10px; height:10px; border-radius:50%; background:var(--coral);"></div></div>
             <div style="font-size:13px;">A defined DNA sequence with regulatory regions, exons, and introns, coding for a protein or functional RNA</div>
           </div>
         </div>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">The One Gene–One Enzyme Hypothesis</h4>
       <p style="margin:0 0 8px;">In 1941, <strong>George Beadle and Edward Tatum</strong> ran a landmark experiment on the bread mold <em>Neurospora crassa</em>. They exposed the mold to X-rays to cause mutations, then looked for mutant strains that could no longer make a specific nutrient on their own. They found that each mutant strain was missing exactly one specific enzyme in a metabolic pathway — and each defect traced back to a single damaged gene.</p>
       <p style="margin:0;">This led to the <strong>"one gene–one enzyme" hypothesis</strong>: the idea that each gene's job is to code for exactly one enzyme. This was later refined to "one gene–one polypeptide" (since not all proteins are enzymes, and some proteins are made of multiple polypeptide chains), and refined again once scientists discovered that some genes code for functional RNA molecules instead of protein at all.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Structure of a Modern Gene</h4>
       <p style="margin:0 0 10px;">A modern gene is not just a simple, uninterrupted stretch of coding instructions — it has distinct functional regions.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; align-items:center; min-width:520px;">
           <div style="flex:1; text-align:center; padding:10px 4px; background:var(--panel); border:1px dashed var(--line); border-radius:6px 0 0 6px; font-size:11.5px; font-weight:600; color:var(--ink-soft);">Promoter</div>
           <div style="flex:1.4; text-align:center; padding:10px 4px; background:var(--teal-soft); font-size:11.5px; font-weight:600; color:var(--teal-deep);">Exon 1</div>
           <div style="flex:1; text-align:center; padding:10px 4px; background:var(--coral-soft); font-size:11.5px; font-weight:600; color:#A8402C;">Intron</div>
           <div style="flex:1.4; text-align:center; padding:10px 4px; background:var(--teal-soft); font-size:11.5px; font-weight:600; color:var(--teal-deep);">Exon 2</div>
           <div style="flex:1; text-align:center; padding:10px 4px; background:var(--panel); border:1px dashed var(--line); border-radius:0 6px 6px 0; font-size:11.5px; font-weight:600; color:var(--ink-soft);">Terminator</div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">A eukaryotic gene — teal blocks (exons) carry the actual coding sequence; the coral block (intron) is removed before translation</p>
       </div>
       <ul style="margin:10px 0 0; padding-left:18px;">
         <li><strong>Promoter:</strong> a regulatory region where the enzyme RNA polymerase binds to begin transcription — it doesn't code for protein itself, but controls whether the gene is switched on</li>
         <li><strong>Exons:</strong> the coding segments that are kept in the final messenger RNA and translated into protein</li>
         <li><strong>Introns:</strong> non-coding segments found within eukaryotic genes, removed from the RNA before translation (a process called splicing)</li>
         <li><strong>Terminator:</strong> a sequence signaling RNA polymerase to stop transcription</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Fine Structure of the Gene — Cistron, Muton, Recon</h4>
       <p style="margin:0 0 8px;">In the 1950s, <strong>Seymour Benzer</strong> studied a virus (bacteriophage T4) at an extremely detailed level and showed that a gene isn't truly "indivisible" the way classical genetics had assumed — it's actually built of smaller sub-units that behave differently depending on what you're asking about.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Cistron:</strong> the smallest unit of DNA required to code for one complete functional product (essentially, the functional definition of a gene itself)</li>
         <li><strong>Muton:</strong> the smallest unit of DNA that, if changed (mutated), can alter the phenotype — as small as a single nucleotide pair</li>
         <li><strong>Recon:</strong> the smallest unit of DNA that can be exchanged or recombined during crossing over — also as small as a single nucleotide pair</li>
       </ul>
       <div style="margin:10px 0 0; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Exam Point</span>
         <p style="margin:6px 0 0; font-size:14px;">This is a very common short-answer exam question. Remember: a cistron can be large (an entire gene), but a muton and a recon can be as small as a single base pair — Benzer's work proved that mutation and recombination can happen at a much finer scale than an entire gene.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Classical Gene Concept vs Modern Gene Concept</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Classical Concept</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Modern Concept</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Divisibility</td><td style="padding:8px 10px; border:1px solid var(--line);">Treated as a single, indivisible unit</td><td style="padding:8px 10px; border:1px solid var(--line);">Made of exons, introns, and regulatory regions</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Function</td><td style="padding:8px 10px; border:1px solid var(--line);">Controls one trait</td><td style="padding:8px 10px; border:1px solid var(--line);">Codes for one protein or functional RNA</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Mutation unit</td><td style="padding:8px 10px; border:1px solid var(--line);">Assumed same size as the whole gene</td><td style="padding:8px 10px; border:1px solid var(--line);">Can occur at a single base pair (muton)</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Chemical identity</td><td style="padding:8px 10px; border:1px solid var(--line);">Unknown</td><td style="padding:8px 10px; border:1px solid var(--line);">A defined sequence of DNA nucleotides</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Types of Genes</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Structural genes:</strong> code for proteins that build the body or carry out metabolic reactions (e.g. the gene for the enzyme amylase)</li>
         <li><strong>Regulatory genes:</strong> code for proteins that control the activity of other genes (e.g. transcription factors, repressors)</li>
         <li><strong>RNA genes:</strong> do not code for protein at all — their final product is a functional RNA molecule, such as rRNA, tRNA, or regulatory microRNA</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Importance &amp; Applications</h4>
       <p style="margin:0 0 8px;">Almost every biotechnology technique that manipulates DNA depends on a precise, working definition of what a gene actually is and where its boundaries lie.</p>
       <div style="margin:0 0 10px; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Biotechnology Application</span>
         <p style="margin:6px 0 0; font-size:14px;">To clone a gene into bacteria for producing a protein like insulin, scientists must know exactly where the gene starts and ends, and often must remove its introns first (since bacteria can't splice them out) — this makes the exon/intron structure a practical, not just theoretical, concern.</p>
       </div>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Industrial applications:</strong> identifying the correct gene boundaries allows industrial-scale cloning of genes into microbial expression systems</li>
         <li><strong>Agricultural applications:</strong> inserting a single well-defined gene (e.g. a pest-resistance gene) into a crop depends on knowing its complete structure, including its regulatory promoter</li>
         <li><strong>Medical applications:</strong> gene therapy requires delivering a correctly structured, functional copy of a gene to replace or supplement a faulty one</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Advantages &amp; Limitations of the Gene Concept</h4>
       <p style="margin:0 0 8px;"><strong>Advantages:</strong> the modern molecular definition of a gene is precise, testable, and directly maps onto real DNA sequences that can be read, copied, and edited in a lab.</p>
       <p style="margin:0;"><strong>Limitations:</strong> the "one gene, one protein" idea, while useful for teaching, is now known to be an oversimplification. A single gene can sometimes produce multiple different proteins through a process called alternative splicing, and some DNA regions once dismissed as "junk" (non-coding) are now known to have important regulatory roles — meaning the boundary of what fully counts as a "gene" is still debated at the edges.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Modern Developments &amp; Interesting Facts</h4>
       <p style="margin:0 0 8px;">Genome sequencing projects have revealed surprises that classical genetics never anticipated: <strong>overlapping genes</strong> (two genes sharing the same DNA region but read in different frames, common in viruses), <strong>pseudogenes</strong> (broken, non-functional copies of real genes), and thousands of genes whose product is a functional RNA molecule rather than a protein at all.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">Humans have only about 20,000 protein-coding genes — roughly the same number as a tiny roundworm (<em>C. elegans</em>) with only about 1,000 cells in its entire body. Human complexity appears to come less from having more genes, and more from alternative splicing and complex gene regulation.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Common Mistakes Students Make</h4>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Assuming a gene and a cistron are always different things — a cistron IS the functional definition of a gene at the molecular level</li>
         <li>Thinking introns are completely useless — while they don't code for protein, some contain regulatory sequences important for gene expression</li>
         <li>Believing "one gene, one protein" is universally true without exception — alternative splicing allows one gene to produce multiple protein variants</li>
         <li>Mixing up muton and recon — both can be as small as one base pair, but muton relates to <em>mutation</em>, recon relates to <em>recombination</em></li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember Benzer's three units alphabetically alongside their function: <strong>C</strong>istron = <strong>C</strong>omplete functional unit; <strong>M</strong>uton = <strong>M</strong>utation's smallest unit; <strong>R</strong>econ = <strong>R</strong>ecombination's smallest unit.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>The word "gene" was coined by Wilhelm Johannsen in 1909, along with "genotype" and "phenotype"</li>
         <li>The gene concept evolved from an abstract Mendelian factor, to a chromosome locus, to a biochemical unit, to today's precise molecular definition</li>
         <li>Beadle and Tatum's "one gene–one enzyme" hypothesis (1941) first linked genes directly to specific biochemical products</li>
         <li>A modern gene includes a promoter, exons (coding), introns (non-coding, removed by splicing), and a terminator</li>
         <li>Benzer's fine-structure analysis showed a gene (cistron) is made of smaller units — mutons and recons — down to a single base pair</li>
         <li>Genes can be structural, regulatory, or RNA-coding, and one gene can sometimes produce multiple proteins via alternative splicing</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Locus:</strong> the fixed physical location of a gene on a chromosome</li>
         <li><strong>Exon:</strong> a coding segment of a gene retained in the mature mRNA</li>
         <li><strong>Intron:</strong> a non-coding segment of a gene removed during RNA splicing</li>
         <li><strong>Cistron:</strong> the smallest DNA unit coding for one complete functional product</li>
         <li><strong>Alternative splicing:</strong> a process where a single gene produces different protein variants by including or excluding different exons</li>
         <li><strong>Pseudogene:</strong> a non-functional, gene-like DNA sequence that has lost its ability to code for a working product</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Who coined the term "gene," and in what year?</li>
         <li>State the "one gene–one enzyme" hypothesis and who proposed it.</li>
         <li>What are exons and introns, and how do they differ?</li>
         <li>Define cistron, muton, and recon.</li>
         <li>Why is "one gene, one protein" now considered an oversimplification?</li>
         <li>What organism did Beadle and Tatum use, and why?</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Trace the evolution of the gene concept from Mendel to the modern molecular definition.</li>
         <li>Describe Benzer's fine structure analysis of the gene (cistron, muton, recon).</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Explain the one gene–one enzyme hypothesis with its significance.</li>
         <li>Describe the structure of a eukaryotic gene.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Define cistron.</li>
         <li>Who coined the term "gene"?</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>The term "gene" was coined by: <strong>(a)</strong> Mendel <strong>(b)</strong> Johannsen <strong>(c)</strong> Morgan <strong>(d)</strong> Benzer <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The "one gene–one enzyme" hypothesis was proposed by: <strong>(a)</strong> Watson &amp; Crick <strong>(b)</strong> Beadle &amp; Tatum <strong>(c)</strong> Sutton &amp; Boveri <strong>(d)</strong> Avery, MacLeod &amp; McCarty <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Beadle and Tatum's experiments were conducted on: <strong>(a)</strong> Fruit flies <strong>(b)</strong> Bread mold (<em>Neurospora</em>) <strong>(c)</strong> Pea plants <strong>(d)</strong> Bacteriophage <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The smallest unit of DNA that, if mutated, can change the phenotype is called: <strong>(a)</strong> Cistron <strong>(b)</strong> Recon <strong>(c)</strong> Muton <strong>(d)</strong> Operon <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Non-coding segments removed from RNA before translation are called: <strong>(a)</strong> Exons <strong>(b)</strong> Introns <strong>(c)</strong> Promoters <strong>(d)</strong> Terminators <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Seymour Benzer's fine structure analysis was performed using: <strong>(a)</strong> Fruit flies <strong>(b)</strong> Bacteriophage T4 <strong>(c)</strong> Pea plants <strong>(d)</strong> Yeast <br><em style="color:var(--teal);">Answer: (b)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Is a cistron the same thing as a gene?</strong><br>Yes, essentially — "cistron" is the precise molecular-genetics term for the same concept most people simply call a "gene."</p>
       <p style="margin:0 0 8px;"><strong>Q: Why do bacteria cause problems when expressing genes with introns?</strong><br>Bacteria lack the cellular machinery (spliceosome) needed to remove introns, so scientists must supply an intron-free version of a eukaryotic gene (often made from mRNA, called cDNA) for bacteria to express it correctly.</p>
       <p style="margin:0;"><strong>Q: Are all genes protein-coding?</strong><br>No — many genes code only for functional RNA molecules, such as transfer RNA (tRNA), ribosomal RNA (rRNA), and regulatory microRNAs, none of which are ever translated into protein.</p>`,

      /* ===================== TOPIC 6 — DNA AS GENETIC MATERIAL ===================== */

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 6 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">DNA as Genetic Material</h4>
       <p style="margin:0 0 10px;">By the 1940s, scientists agreed that chromosomes carried genetic information — but chromosomes are made of <em>two</em> types of molecules: DNA and protein. At the time, most scientists actually bet on protein being the genetic material, since proteins are built from 20 different amino acids and seemed "complex enough" to store life's instructions, while DNA — built from just 4 repeating building blocks — seemed too simple and repetitive to carry anything meaningful. Three landmark experiments proved that assumption completely wrong.</p>
       <div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">DNA (deoxyribonucleic acid) is the genetic material of nearly all living organisms — the molecule that stores, copies, and transmits hereditary information from one generation to the next.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Griffith's Transformation Experiment (1928)</h4>
       <p style="margin:0 0 10px;">British scientist Frederick Griffith worked with two strains of the bacterium <em>Streptococcus pneumoniae</em>: a deadly "S" strain (with a smooth protective coat) and a harmless "R" strain (without the coat). His experiment involved four groups of mice.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; gap:10px; min-width:520px;">
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--teal-soft); border-radius:8px;">
             <div style="font-size:12px; font-weight:600; color:var(--teal-deep);">Live R strain</div>
             <div style="font-size:18px; margin:6px 0; color:var(--ink-soft);">→</div>
             <div style="font-size:12px; color:var(--ink);">Mouse survives</div>
           </div>
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--coral-soft); border-radius:8px;">
             <div style="font-size:12px; font-weight:600; color:#A8402C;">Live S strain</div>
             <div style="font-size:18px; margin:6px 0; color:var(--ink-soft);">→</div>
             <div style="font-size:12px; color:var(--ink);">Mouse dies</div>
           </div>
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--teal-soft); border-radius:8px;">
             <div style="font-size:12px; font-weight:600; color:var(--teal-deep);">Heat-killed S strain</div>
             <div style="font-size:18px; margin:6px 0; color:var(--ink-soft);">→</div>
             <div style="font-size:12px; color:var(--ink);">Mouse survives</div>
           </div>
           <div style="flex:1; text-align:center; padding:10px 6px; background:var(--coral-soft); border-radius:8px;">
             <div style="font-size:12px; font-weight:600; color:#A8402C;">Heat-killed S + Live R</div>
             <div style="font-size:18px; margin:6px 0; color:var(--ink-soft);">→</div>
             <div style="font-size:12px; color:var(--ink);">Mouse dies!</div>
           </div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">The fourth group proved something from the dead S strain "transformed" the harmless R strain into a deadly one</p>
       </div>
       <p style="margin:0;">The fourth result was the shocking one: neither the dead S strain nor the live R strain alone could kill a mouse, but <em>combined</em>, they did. Something from the dead S bacteria had permanently changed (transformed) the harmless R bacteria into deadly S bacteria — and this new deadly trait was then passed on to their descendants. Griffith called this mystery substance the <strong>"transforming principle,"</strong> but had no way to identify what it chemically was.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Avery, MacLeod &amp; McCarty Experiment (1944)</h4>
       <p style="margin:0 0 8px;">Sixteen years after Griffith's experiment, Oswald Avery, Colin MacLeod, and Maclyn McCarty set out to identify exactly what the "transforming principle" was chemically made of. Their method was systematic elimination:</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Step 1:</strong> They extracted material from heat-killed S strain bacteria that could still transform R strain bacteria</li>
         <li><strong>Step 2:</strong> They treated separate samples of this extract with enzymes that specifically destroy protein, RNA, or DNA</li>
         <li><strong>Step 3:</strong> When protein-destroying or RNA-destroying enzymes were used, transformation still occurred — proving protein and RNA were not responsible</li>
         <li><strong>Step 4:</strong> Only when a DNA-destroying enzyme (DNase) was used did transformation stop completely</li>
       </ul>
       <p style="margin:10px 0 0;">This was the first direct chemical proof that <strong>DNA</strong>, not protein, was Griffith's mysterious transforming principle — and, by extension, the genetic material. Despite this strong evidence, many scientists remained skeptical for almost a decade, still favoring protein out of habit.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Hershey-Chase Experiment (1952)</h4>
       <p style="margin:0 0 8px;">Alfred Hershey and Martha Chase designed an elegant experiment using a bacteriophage (a virus that infects bacteria) called T2, which is structurally simple — just a protein coat wrapped around a core of DNA. Their trick was to label the two components with different radioactive tags: <strong>sulfur-35</strong> (found in protein, but not DNA) and <strong>phosphorus-32</strong> (found in DNA, but not protein).</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; flex-direction:column; gap:10px; min-width:460px;">
           <div style="display:flex; align-items:center; gap:12px;">
             <div style="width:170px; text-align:center; padding:8px; background:var(--coral-soft); border-radius:8px; font-size:12px; font-weight:600; color:#A8402C;">Phage labeled with ³⁵S (protein)</div>
             <div style="font-size:16px; color:var(--ink-soft);">→ infects bacteria →</div>
             <div style="flex:1; text-align:center; padding:8px; background:var(--panel); border:1px dashed var(--line); border-radius:8px; font-size:12px;">Radioactivity stays <strong>outside</strong> the cell</div>
           </div>
           <div style="display:flex; align-items:center; gap:12px;">
             <div style="width:170px; text-align:center; padding:8px; background:var(--teal-soft); border-radius:8px; font-size:12px; font-weight:600; color:var(--teal-deep);">Phage labeled with ³²P (DNA)</div>
             <div style="font-size:16px; color:var(--ink-soft);">→ infects bacteria →</div>
             <div style="flex:1; text-align:center; padding:8px; background:var(--panel); border:1px dashed var(--line); border-radius:8px; font-size:12px;">Radioactivity found <strong>inside</strong> the cell</div>
           </div>
         </div>
       </div>
       <p style="margin:0 0 8px;"><strong>Step-by-step method:</strong></p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Step 1:</strong> Two separate batches of phage were grown — one radioactively labeled in their protein coat, one labeled in their DNA</li>
         <li><strong>Step 2:</strong> Each batch was allowed to infect a fresh culture of bacteria</li>
         <li><strong>Step 3:</strong> The mixture was violently agitated in a kitchen blender, shaking loose any phage material still stuck to the outside of the bacterial cells</li>
         <li><strong>Step 4:</strong> The mixture was spun in a centrifuge, separating the heavier bacterial cells (forming a pellet) from lighter, detached phage material (staying in the liquid)</li>
         <li><strong>Step 5:</strong> Radioactivity was measured in both the pellet (bacteria) and the liquid (detached phage coats)</li>
       </ul>
       <p style="margin:10px 0 0;">The sulfur-labeled protein stayed in the liquid (outside the bacteria), while the phosphorus-labeled DNA ended up in the pellet (inside the bacteria) — proving that only DNA enters the cell to direct the production of new viruses, while the protein coat is just a delivery shell left behind outside.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Criteria a Molecule Must Meet to Be Genetic Material</h4>
       <p style="margin:0 0 10px;">Beyond the direct experimental proof, DNA also satisfies several logical requirements that any genetic material must meet.</p>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Replication:</strong> it must be able to make accurate copies of itself, so information can pass to daughter cells — DNA does this via its complementary base-pairing structure</li>
         <li><strong>Stability:</strong> it must be chemically stable enough to preserve information across generations — DNA's double-helix structure protects the coding bases on the inside</li>
         <li><strong>Capacity for information storage:</strong> it must be able to encode the huge variety of instructions needed for life — the sequence of just 4 DNA bases, arranged in long chains, provides essentially unlimited combinations</li>
         <li><strong>Capacity for mutation:</strong> it must be able to change occasionally, providing the raw material for variation and evolution, without being so unstable that it falls apart</li>
         <li><strong>Ability to express itself:</strong> it must be able to control the production of proteins that build and run the cell — DNA does this via transcription and translation</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">DNA vs RNA</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">DNA</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">RNA</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Full name</td><td style="padding:8px 10px; border:1px solid var(--line);">Deoxyribonucleic acid</td><td style="padding:8px 10px; border:1px solid var(--line);">Ribonucleic acid</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Sugar</td><td style="padding:8px 10px; border:1px solid var(--line);">Deoxyribose (lacks one oxygen)</td><td style="padding:8px 10px; border:1px solid var(--line);">Ribose</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Strands</td><td style="padding:8px 10px; border:1px solid var(--line);">Double-stranded (helix)</td><td style="padding:8px 10px; border:1px solid var(--line);">Usually single-stranded</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Bases</td><td style="padding:8px 10px; border:1px solid var(--line);">Adenine, Thymine, Guanine, Cytosine</td><td style="padding:8px 10px; border:1px solid var(--line);">Adenine, Uracil, Guanine, Cytosine</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Stability</td><td style="padding:8px 10px; border:1px solid var(--line);">More stable, long-term storage</td><td style="padding:8px 10px; border:1px solid var(--line);">Less stable, shorter-lived</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Main role</td><td style="padding:8px 10px; border:1px solid var(--line);">Long-term storage of genetic information</td><td style="padding:8px 10px; border:1px solid var(--line);">Carries out instructions (mRNA, tRNA, rRNA)</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Chargaff's Rules — Supporting Evidence</h4>
       <p style="margin:0 0 8px;">Around the same time as these experiments, biochemist Erwin Chargaff analyzed the base composition of DNA from many different species and discovered a consistent pattern, now called <strong>Chargaff's Rules</strong>:</p>
       <ul style="margin:0; padding-left:18px;">
         <li>The amount of Adenine (A) always roughly equals the amount of Thymine (T)</li>
         <li>The amount of Guanine (G) always roughly equals the amount of Cytosine (C)</li>
         <li>The overall A+T to G+C ratio, however, varies between different species</li>
       </ul>
       <p style="margin:10px 0 0;">This A=T and G=C pattern was a major clue that later helped Watson and Crick propose complementary base pairing in the double helix — each A on one strand pairs with a T on the other, and each G pairs with a C.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Importance &amp; Applications</h4>
       <div style="margin:0 0 10px; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Important</span>
         <p style="margin:6px 0 0; font-size:14px;">Confirming DNA as the genetic material was the single event that made modern biotechnology possible — every technique from PCR to CRISPR to gene cloning depends on DNA being the reliable, copyable, editable molecule that these experiments proved it to be.</p>
       </div>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Biotechnology application:</strong> recombinant DNA technology only makes sense because DNA (not protein) carries the instructions that get expressed in a new host cell</li>
         <li><strong>Industrial applications:</strong> engineering bacteria to produce chemicals or enzymes relies on inserting the correct DNA sequence, trusting that DNA — not any other molecule — will direct that production</li>
         <li><strong>Medical applications:</strong> DNA-based diagnostic tests (like PCR-based viral testing) work specifically because DNA carries stable, sequence-specific information that can be detected and amplified</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Advantages &amp; Limitations</h4>
       <p style="margin:0 0 8px;"><strong>Advantages of DNA as genetic material:</strong> its double-helix structure makes it chemically stable and self-repairing (one strand can be used as a template to fix damage on the other), and its four-letter code allows for essentially unlimited information storage in a compact form.</p>
       <p style="margin:0;"><strong>Limitations:</strong> DNA on its own cannot directly build proteins — it needs RNA and ribosomes as intermediates (covered in later topics), and it is still vulnerable to mutation from radiation, chemicals, or replication errors, some of which can cause disease.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Modern Developments &amp; Interesting Facts</h4>
       <p style="margin:0 0 8px;">Today, DNA's role as genetic material is exploited directly in technologies like DNA fingerprinting (used in forensics and paternity testing), whole-genome sequencing, and even experimental "DNA data storage," where digital files have been encoded into synthetic DNA sequences as an extremely dense, long-term storage medium.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">A single gram of DNA can theoretically store around 215 million gigabytes of digital data — researchers have already successfully encoded and retrieved text, images, and even short videos from synthetic DNA in lab experiments.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Common Mistakes Students Make</h4>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Mixing up Griffith's experiment (showed transformation happens, but not what causes it) with Avery-MacLeod-McCarty's experiment (identified DNA specifically as the cause)</li>
         <li>Thinking Griffith proved DNA was the genetic material — he only proved that <em>something</em> transferable could change bacterial traits</li>
         <li>Forgetting why Hershey and Chase used a blender — it was specifically to physically shake phage coats off the outside of bacterial cells before separating them by centrifugation</li>
         <li>Assuming Chargaff's rules mean A, T, G, and C are all present in equal amounts — only A=T and G=C, not all four bases equally</li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember the three proofs in order with "G-A-H": <strong>G</strong>riffith showed transformation happens → <strong>A</strong>very-MacLeod-McCarty showed DNA causes it → <strong>H</strong>ershey-Chase confirmed it with radioactive proof.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>Griffith's 1928 experiment showed that a "transforming principle" from dead bacteria could change a harmless strain into a deadly one</li>
         <li>Avery, MacLeod &amp; McCarty (1944) proved that principle was DNA, using enzymes that selectively destroy protein, RNA, or DNA</li>
         <li>Hershey and Chase (1952) confirmed DNA as genetic material using radioactively labeled bacteriophages</li>
         <li>Any genetic material must be able to replicate, remain stable, store large amounts of information, mutate occasionally, and express itself as proteins</li>
         <li>Chargaff's Rules (A=T, G=C) provided key supporting evidence later used in the double-helix model</li>
         <li>DNA is more stable and typically double-stranded; RNA is less stable, usually single-stranded, and carries out DNA's instructions</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Transformation:</strong> the uptake and incorporation of external genetic material by a cell, changing its properties</li>
         <li><strong>Bacteriophage:</strong> a virus that specifically infects bacteria</li>
         <li><strong>Radioactive labeling:</strong> tagging a molecule with a radioactive isotope so it can be tracked</li>
         <li><strong>Centrifugation:</strong> spinning a mixture at high speed to separate components by density</li>
         <li><strong>Chargaff's Rules:</strong> the observation that A always roughly equals T, and G always roughly equals C, in DNA</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>What did Griffith's experiment prove, and what did it fail to prove?</li>
         <li>How did Avery, MacLeod, and McCarty identify DNA as the transforming principle?</li>
         <li>Why did Hershey and Chase use two different radioactive labels?</li>
         <li>Why was a blender used in the Hershey-Chase experiment?</li>
         <li>State Chargaff's Rules.</li>
         <li>List the five criteria a molecule must satisfy to be considered genetic material.</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Describe the experiments that established DNA as the genetic material.</li>
         <li>Explain the Hershey-Chase experiment in detail with its significance.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Describe Griffith's transformation experiment.</li>
         <li>State Chargaff's Rules and their significance.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Define transformation.</li>
         <li>Name the radioactive isotopes used in the Hershey-Chase experiment.</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Griffith's experiment used which bacterium? <strong>(a)</strong> <em>E. coli</em> <strong>(b)</strong> <em>Streptococcus pneumoniae</em> <strong>(c)</strong> <em>Salmonella</em> <strong>(d)</strong> <em>Bacillus</em> <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The "transforming principle" was chemically identified as DNA by: <strong>(a)</strong> Griffith <strong>(b)</strong> Hershey &amp; Chase <strong>(c)</strong> Avery, MacLeod &amp; McCarty <strong>(d)</strong> Watson &amp; Crick <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>In the Hershey-Chase experiment, radioactive sulfur (³⁵S) labeled the: <strong>(a)</strong> DNA <strong>(b)</strong> Protein coat <strong>(c)</strong> Ribosomes <strong>(d)</strong> Cell wall <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>After blending and centrifuging, radioactive DNA (³²P) was found: <strong>(a)</strong> In the liquid only <strong>(b)</strong> In the bacterial pellet <strong>(c)</strong> Equally in both <strong>(d)</strong> Destroyed completely <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Chargaff's Rules state that: <strong>(a)</strong> A=G and T=C <strong>(b)</strong> A=T and G=C <strong>(c)</strong> All four bases are always equal <strong>(d)</strong> A=C and G=T <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>RNA differs from DNA in that RNA contains: <strong>(a)</strong> Thymine instead of Uracil <strong>(b)</strong> Uracil instead of Thymine <strong>(c)</strong> No nitrogenous bases <strong>(d)</strong> Deoxyribose sugar <br><em style="color:var(--teal);">Answer: (b)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Why didn't Griffith's experiment alone convince scientists that DNA was the genetic material?</strong><br>Because Griffith never chemically identified what the "transforming principle" was made of — his experiment only proved that some transferable substance existed, not that it was specifically DNA.</p>
       <p style="margin:0 0 8px;"><strong>Q: Why was protein initially favored over DNA as the genetic material?</strong><br>Protein is built from 20 different amino acids, which seemed to offer far more "coding potential" than DNA's four repeating bases — this assumption turned out to be wrong once DNA's sequence-based coding capacity was properly understood.</p>
       <p style="margin:0;"><strong>Q: Is DNA the genetic material in all organisms?</strong><br>Almost all — the major exception is certain viruses (like retroviruses and some bacteriophages), which use RNA as their genetic material instead.</p>`,

      /* ===================== TOPIC 7 — RNA AS GENETIC MATERIAL ===================== */

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 7 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">RNA as Genetic Material</h4>
       <p style="margin:0 0 10px;">Topic 6 established DNA as the genetic material of life — but "nearly all" organisms is not the same as "all." A specific and medically important group of viruses, including the one that causes COVID-19 and the one that causes AIDS (HIV), don't use DNA as their genetic material at all. Instead, their entire genome is made of RNA. Understanding how this works isn't just a textbook exception — it directly explains how some of the most significant viruses in human history actually operate.</p>
       <div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">RNA (ribonucleic acid) serves as the genetic material in certain viruses, called RNA viruses, meaning their entire hereditary information is stored and passed on as RNA instead of DNA.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Historical Background — TMV and the First Clues</h4>
       <p style="margin:0 0 8px;">The first hints that RNA could act as genetic material came from studies of the <strong>Tobacco Mosaic Virus (TMV)</strong>, a simple virus that infects tobacco plants and causes a distinctive mottled ("mosaic") pattern on their leaves. TMV is structurally very simple: just a single strand of RNA wrapped in a protective coat made of protein — and, notably, it contains no DNA at all.</p>
       <p style="margin:0;">Since TMV clearly reproduces itself and passes on consistent traits (like the specific mosaic pattern it causes), scientists in the 1930s–1950s realized that if DNA truly were the <em>only</em> possible genetic material, TMV shouldn't be able to function as a virus at all. This contradiction demanded a direct experimental test.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">The Fraenkel-Conrat and Singer Experiment (1956)</h4>
       <p style="margin:0 0 8px;">Heinz Fraenkel-Conrat and Beatrice Singer designed a clean, direct test using two different strains of TMV, which produce visibly different symptoms on tobacco leaves. Their method was essentially a "mix and match" of parts from two different viruses.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; flex-direction:column; gap:12px; min-width:460px;">
           <div style="display:flex; align-items:center; gap:10px;">
             <div style="flex:1; text-align:center; padding:8px; background:var(--teal-soft); border-radius:8px; font-size:12px; font-weight:600; color:var(--teal-deep);">Strain A: RNA (A) + Protein coat (A)</div>
             <div style="font-size:16px; color:var(--ink-soft);">+</div>
             <div style="flex:1; text-align:center; padding:8px; background:var(--coral-soft); border-radius:8px; font-size:12px; font-weight:600; color:#A8402C;">Strain B: RNA (B) + Protein coat (B)</div>
           </div>
           <div style="text-align:center; font-size:13px; color:var(--ink-soft);">Components separated and swapped:</div>
           <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
             <div style="text-align:center; padding:8px 14px; background:var(--teal-soft); border-radius:8px; font-size:12px; font-weight:600; color:var(--teal-deep);">Hybrid: RNA (A) + Protein coat (B)</div>
           </div>
           <div style="display:flex; justify-content:center;"><div style="font-size:16px; color:var(--ink-soft);">↓ infects tobacco plant ↓</div></div>
           <div style="display:flex; justify-content:center;">
             <div style="text-align:center; padding:8px 16px; background:var(--panel); border:1px dashed var(--line); border-radius:8px; font-size:12.5px; font-weight:600;">New viruses produced show Strain A symptoms — and contain Strain A's original protein coat</div>
           </div>
         </div>
       </div>
       <p style="margin:0;">They created a hybrid virus using the RNA from one strain and the protein coat from a different strain. When this hybrid infected a tobacco plant, the new viruses it produced always matched the strain of the <strong>RNA</strong>, not the protein coat — proving decisively that RNA, not protein, carried TMV's genetic instructions.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Retroviruses &amp; the Discovery of Reverse Transcriptase</h4>
       <p style="margin:0 0 8px;">For decades, biology followed a strict rule known as the Central Dogma: DNA makes RNA, and RNA makes protein — information was believed to flow in only one direction. In 1970, <strong>Howard Temin</strong> and <strong>David Baltimore</strong>, working independently, discovered an enzyme that broke this rule: <strong>reverse transcriptase</strong>, which can build a DNA strand using an RNA template — the reverse of normal transcription.</p>
       <p style="margin:0;">This discovery explained how <strong>retroviruses</strong> (a special category of RNA viruses that includes HIV) actually replicate. Unlike TMV, retroviruses don't just copy their RNA directly — they first convert it into DNA, which is then inserted into the host's own genome.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Step-by-Step: The Retrovirus Life Cycle</h4>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; align-items:center; gap:6px; min-width:560px;">
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--teal-soft); border-radius:8px; font-size:11.5px; font-weight:600; color:var(--teal-deep);">Viral RNA enters host cell</div>
           <span style="font-size:16px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--coral-soft); border-radius:8px; font-size:11.5px; font-weight:600; color:#A8402C;">Reverse transcriptase makes DNA copy</div>
           <span style="font-size:16px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--teal-soft); border-radius:8px; font-size:11.5px; font-weight:600; color:var(--teal-deep);">Viral DNA integrates into host genome</div>
           <span style="font-size:16px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--coral-soft); border-radius:8px; font-size:11.5px; font-weight:600; color:#A8402C;">Host transcribes &amp; makes new viruses</div>
         </div>
       </div>
       <ul style="margin:10px 0 0; padding-left:18px;">
         <li><strong>Step 1:</strong> The retrovirus injects its single-stranded RNA genome into a host cell</li>
         <li><strong>Step 2:</strong> The enzyme reverse transcriptase (carried by the virus itself) uses this RNA as a template to synthesize a complementary DNA strand</li>
         <li><strong>Step 3:</strong> This viral DNA is inserted (integrated) directly into the host cell's own chromosomal DNA, becoming a permanent part of the host genome</li>
         <li><strong>Step 4:</strong> The host cell's own machinery then transcribes and translates this integrated viral DNA, unknowingly producing new copies of the virus</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Why RNA Can Serve as Genetic Material (Despite Being Less Stable)</h4>
       <p style="margin:0;">RNA is chemically less stable than DNA (it degrades faster and is more prone to errors during copying), which is exactly why most complex organisms use DNA for long-term storage. But for a virus, this instability isn't necessarily a disadvantage — it can actually be useful. RNA viruses mutate and evolve extremely quickly, letting them rapidly adapt to a host's immune defenses or to new host species — one major reason viruses like influenza and HIV are so difficult to permanently vaccinate against.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">The RNA World Hypothesis</h4>
       <p style="margin:0 0 8px;">RNA's role isn't limited to viruses — many origin-of-life researchers believe RNA may have been the <em>original</em> genetic material for all early life, before DNA evolved. This idea, called the <strong>RNA World Hypothesis</strong>, is supported by the discovery of <strong>ribozymes</strong> — RNA molecules that can act as enzymes, catalyzing chemical reactions the way proteins normally do.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Important</span>
         <p style="margin:6px 0 0; font-size:14px;">RNA is unique among these molecules because it can do two jobs at once: store genetic information (like DNA) AND catalyze reactions (like a protein enzyme). This dual ability is exactly why many scientists think RNA came first, with DNA and proteins evolving later to each specialize in one of those two jobs.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">RNA Viruses vs DNA Viruses</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">RNA Viruses</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">DNA Viruses</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Genetic material</td><td style="padding:8px 10px; border:1px solid var(--line);">RNA</td><td style="padding:8px 10px; border:1px solid var(--line);">DNA</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Mutation rate</td><td style="padding:8px 10px; border:1px solid var(--line);">High (less proofreading)</td><td style="padding:8px 10px; border:1px solid var(--line);">Lower (better proofreading)</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Examples</td><td style="padding:8px 10px; border:1px solid var(--line);">HIV, influenza, TMV, SARS-CoV-2</td><td style="padding:8px 10px; border:1px solid var(--line);">Bacteriophage T2/T4, herpesvirus, smallpox virus</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Needs reverse transcriptase?</td><td style="padding:8px 10px; border:1px solid var(--line);">Only retroviruses (e.g. HIV)</td><td style="padding:8px 10px; border:1px solid var(--line);">No</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Importance, Advantages &amp; Limitations</h4>
       <p style="margin:0 0 8px;"><strong>Advantages of RNA as genetic material (for a virus):</strong> RNA's fast mutation rate allows rapid adaptation and evolution, and RNA viruses often need fewer genes and simpler machinery to replicate, letting them infect and spread efficiently.</p>
       <p style="margin:0;"><strong>Limitations:</strong> RNA's chemical instability and error-prone copying make RNA-based genomes more fragile and prone to harmful mutations, which is one reason RNA viruses tend to have smaller genomes than most DNA viruses or cellular organisms.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Applications &amp; Clinical Significance</h4>
       <div style="margin:0 0 10px; padding:12px 14px; background:var(--coral-soft); border-left:4px solid var(--coral); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#A8402C; font-weight:600;">Clinical Point</span>
         <p style="margin:6px 0 0; font-size:14px;">HIV (Human Immunodeficiency Virus) is a retrovirus — after infection, its RNA is reverse-transcribed into DNA and permanently inserted into the host's own genome, which is exactly why HIV cannot currently be fully cleared from the body: the viral instructions become a hidden, permanent part of the patient's own DNA.</p>
       </div>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Biotechnology application:</strong> reverse transcriptase, discovered through retrovirus research, is now a standard laboratory tool used to convert RNA into complementary DNA (cDNA) for cloning and RT-PCR testing</li>
         <li><strong>Medical applications:</strong> antiretroviral drugs used to treat HIV specifically target reverse transcriptase, blocking the virus from converting its RNA into DNA</li>
         <li><strong>Industrial/research applications:</strong> retroviruses (modified to be harmless) are used in gene therapy as delivery vehicles (vectors) to insert therapeutic genes into a patient's cells</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Modern Developments &amp; Interesting Facts</h4>
       <p style="margin:0 0 8px;">RT-PCR (Reverse Transcription PCR) — the exact test widely used to detect SARS-CoV-2 (the RNA virus that causes COVID-19) — works by first using reverse transcriptase to convert the virus's RNA into DNA, since PCR itself can only amplify DNA, not RNA directly. This single piece of 1970s retrovirus research became one of the most-used medical tests of the 2020s.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">Roughly 8% of the human genome is made up of ancient, inactive retroviral DNA sequences — remnants of retroviruses that infected our distant ancestors millions of years ago and became permanently embedded in the human genome.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Common Mistakes Students Make</h4>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Thinking all viruses use DNA — many important viruses (HIV, influenza, TMV, SARS-CoV-2) use RNA exclusively</li>
         <li>Confusing "RNA virus" with "retrovirus" — all retroviruses are RNA viruses, but not all RNA viruses are retroviruses (only retroviruses use reverse transcriptase and integrate into host DNA)</li>
         <li>Believing reverse transcriptase violates a "law" of biology — it doesn't break any law, it simply shows that genetic information can flow RNA→DNA as well as DNA→RNA</li>
         <li>Assuming mRNA vaccines (like those for COVID-19) insert genetic material into a person's DNA — they don't; mRNA vaccines only deliver instructions to temporarily make a protein and are broken down afterward, with no reverse transcriptase involved</li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember "TMV proved it, HIV uses it": <strong>T</strong>MV proved RNA CAN be genetic material; <strong>HIV</strong> shows how a retrovirus USES that RNA, by converting it to DNA first.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>Some viruses (like TMV, HIV, influenza, SARS-CoV-2) use RNA, not DNA, as their genetic material</li>
         <li>Fraenkel-Conrat and Singer (1956) proved this using a "mix and match" TMV reconstitution experiment</li>
         <li>Retroviruses use the enzyme reverse transcriptase (discovered by Temin and Baltimore, 1970) to convert their RNA into DNA, which then integrates into the host genome</li>
         <li>RNA's fast mutation rate helps viruses adapt quickly but makes their genomes less stable overall</li>
         <li>The RNA World Hypothesis proposes RNA was life's original genetic material, since it can both store information and catalyze reactions (as ribozymes)</li>
         <li>Reverse transcriptase is now a key laboratory tool, and antiretroviral HIV drugs work by blocking this exact enzyme</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>RNA virus:</strong> a virus whose genetic material is RNA rather than DNA</li>
         <li><strong>Retrovirus:</strong> an RNA virus that converts its genome into DNA using reverse transcriptase and integrates it into the host genome</li>
         <li><strong>Reverse transcriptase:</strong> an enzyme that synthesizes DNA using an RNA template</li>
         <li><strong>Ribozyme:</strong> an RNA molecule capable of catalyzing a chemical reaction, like an enzyme</li>
         <li><strong>RNA World Hypothesis:</strong> the idea that RNA, not DNA, was the original genetic material of early life</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>What experiment proved RNA could act as genetic material?</li>
         <li>What is reverse transcriptase, and who discovered it?</li>
         <li>Describe the life cycle of a retrovirus.</li>
         <li>Why is HIV so difficult to eliminate from the body once a person is infected?</li>
         <li>What is the RNA World Hypothesis, and what evidence supports it?</li>
         <li>Give one clinical and one biotechnology application of reverse transcriptase.</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Describe the experiment that established RNA as the genetic material in TMV.</li>
         <li>Explain the retrovirus life cycle and the role of reverse transcriptase.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Write a short note on the RNA World Hypothesis.</li>
         <li>Differentiate between RNA viruses and DNA viruses.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Define reverse transcriptase.</li>
         <li>Name one RNA virus and one DNA virus.</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>RNA as genetic material was first demonstrated using: <strong>(a)</strong> Bacteriophage T2 <strong>(b)</strong> Tobacco Mosaic Virus <strong>(c)</strong> HIV <strong>(d)</strong> <em>E. coli</em> <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>The TMV reconstitution experiment was performed by: <strong>(a)</strong> Hershey &amp; Chase <strong>(b)</strong> Temin &amp; Baltimore <strong>(c)</strong> Fraenkel-Conrat &amp; Singer <strong>(d)</strong> Avery, MacLeod &amp; McCarty <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Reverse transcriptase was discovered by: <strong>(a)</strong> Watson &amp; Crick <strong>(b)</strong> Temin &amp; Baltimore <strong>(c)</strong> Mullis <strong>(d)</strong> Sanger <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Reverse transcriptase synthesizes: <strong>(a)</strong> RNA from a DNA template <strong>(b)</strong> DNA from an RNA template <strong>(c)</strong> Protein from RNA <strong>(d)</strong> RNA from protein <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>HIV is classified as a: <strong>(a)</strong> DNA virus <strong>(b)</strong> Bacteriophage <strong>(c)</strong> Retrovirus <strong>(d)</strong> Viroid <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>An RNA molecule that can catalyze reactions like an enzyme is called a: <strong>(a)</strong> Ribosome <strong>(b)</strong> Ribozyme <strong>(c)</strong> Riboflavin <strong>(d)</strong> Recon <br><em style="color:var(--teal);">Answer: (b)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Do mRNA vaccines use reverse transcriptase to alter human DNA?</strong><br>No — mRNA vaccines simply deliver temporary instructions for a cell to make one viral protein; the mRNA is broken down afterward and never enters the nucleus or involves reverse transcriptase.</p>
       <p style="margin:0 0 8px;"><strong>Q: Why do RNA viruses mutate faster than DNA viruses?</strong><br>Because the enzymes that copy RNA generally lack the proofreading ability that DNA-copying enzymes have, so copying errors are far more likely to be left uncorrected.</p>
       <p style="margin:0;"><strong>Q: Does reverse transcriptase disprove the Central Dogma?</strong><br>Not exactly — it revealed an important exception to the original, overly rigid one-way version of the Central Dogma, showing that information can also flow from RNA back into DNA under specific circumstances.</p>`,

      /* ===================== TOPIC 8 — CHROMOSOME STRUCTURE ===================== */

      `<div style="margin-bottom:4px;"><span style="font-family:var(--mono); font-size:11px; color:var(--teal); text-transform:uppercase; letter-spacing:0.08em;">Topic 8 of 31</span></div>
       <h4 style="color:var(--teal-deep); font-size:16px; margin:0 0 10px;">Chromosome Structure</h4>
       <p style="margin:0 0 10px;">Here is a genuinely astonishing fact: if you stretched out all the DNA in just one of your cells, end to end, it would measure about 2 meters long. Yet this 2-meter thread is somehow folded and packed into a nucleus roughly 6 micrometers across — about 300,000 times smaller. This isn't sloppy packing either; it has to unfold and refold perfectly every time a cell divides. This topic explains exactly how that remarkable packaging job is done, and what a chromosome actually looks like once you zoom in close enough to see its parts.</p>
       <div style="margin:10px 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Definition</span>
         <p style="margin:6px 0 0; font-size:14px;">A chromosome is a single, tightly coiled structure made of DNA wound around proteins called histones, forming a compact package that carries an organism's genes and can be accurately copied and separated during cell division.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Historical Background</h4>
       <p style="margin:0;">Chromosomes were first observed under the microscope by German biologist <strong>Walther Flemming</strong> in 1882, who watched thread-like structures inside dividing cells and named the process <strong>mitosis</strong>. A few years later, in 1888, another German scientist, <strong>Heinrich Wilhelm Waldeyer</strong>, coined the actual term <strong>"chromosome"</strong> — from the Greek <em>chroma</em> (color) and <em>soma</em> (body) — because these structures absorbed colored dyes strongly during staining, making them easy to see under a microscope, long before anyone knew they carried genetic information.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">The Packaging Problem — Why DNA Needs to Be Folded</h4>
       <p style="margin:0;">DNA is an extremely long, thin molecule, and a human cell contains about 2 meters of it split across 46 chromosomes, all of which must fit inside a nucleus just a few micrometers wide. On top of that, this DNA must stay organized enough to be accurately read (for gene expression), accurately copied (before division), and accurately separated into daughter cells — all without getting tangled like a ball of string. The solution nature evolved is a highly organized, multi-level folding system, using special proteins called <strong>histones</strong> as spools.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Levels of DNA Packaging — Step by Step</h4>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; align-items:center; gap:6px; min-width:560px;">
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--teal-soft); border-radius:8px; font-size:11px; font-weight:600; color:var(--teal-deep);">DNA double helix<br><span style="font-weight:400; font-size:10px;">2nm wide</span></div>
           <span style="font-size:16px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--coral-soft); border-radius:8px; font-size:11px; font-weight:600; color:#A8402C;">Nucleosomes<br><span style="font-weight:400; font-size:10px;">"beads on a string"</span></div>
           <span style="font-size:16px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--teal-soft); border-radius:8px; font-size:11px; font-weight:600; color:var(--teal-deep);">30nm chromatin fiber</div>
           <span style="font-size:16px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--coral-soft); border-radius:8px; font-size:11px; font-weight:600; color:#A8402C;">Looped domains</div>
           <span style="font-size:16px; color:var(--ink-soft);">→</span>
           <div style="flex:1; text-align:center; padding:8px 4px; background:var(--teal-soft); border-radius:8px; font-size:11px; font-weight:600; color:var(--teal-deep);">Condensed chromosome</div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">Each level of folding compacts the DNA further, until it is short and dense enough to be moved safely during cell division</p>
       </div>
       <ul style="margin:10px 0 0; padding-left:18px;">
         <li><strong>Step 1:</strong> The DNA double helix (about 2 nanometers wide) wraps around a cluster of 8 histone proteins, forming a bead-like structure called a nucleosome</li>
         <li><strong>Step 2:</strong> A chain of nucleosomes, held together with the help of linker histone H1, coils further into a thicker 30-nanometer chromatin fiber</li>
         <li><strong>Step 3:</strong> This fiber loops back on itself repeatedly, attached to a protein scaffold, forming looped domains</li>
         <li><strong>Step 4:</strong> These loops coil and fold further, especially just before cell division, forming the highly condensed, visible chromosome structure seen under a microscope during mitosis</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Nucleosome Structure</h4>
       <p style="margin:0 0 10px;">The nucleosome is the basic repeating unit of chromatin packaging, and it has a very specific composition.</p>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; justify-content:center; min-width:220px;">
           <div style="width:130px; height:130px; border-radius:50%; background:var(--teal-soft); display:flex; align-items:center; justify-content:center; position:relative; border:3px solid var(--teal);">
             <span style="font-size:12px; font-weight:600; color:var(--teal-deep); text-align:center;">Histone<br>octamer<br>(8 proteins)</span>
             <div style="position:absolute; top:-8px; left:-8px; right:-8px; bottom:-8px; border:3px dashed var(--coral); border-radius:50%;"></div>
           </div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">DNA (dashed coral line) wraps roughly twice around a core of 8 histone proteins</p>
       </div>
       <ul style="margin:10px 0 0; padding-left:18px;">
         <li><strong>Histone octamer:</strong> a core of 8 histone proteins — 2 copies each of H2A, H2B, H3, and H4</li>
         <li><strong>DNA wrap:</strong> about 146–147 base pairs of DNA wrap around this histone core, almost twice around</li>
         <li><strong>Linker DNA:</strong> a short stretch of DNA connecting one nucleosome to the next, like string between beads</li>
         <li><strong>Histone H1:</strong> a separate "linker histone" that sits at the point where DNA enters and exits the nucleosome, helping to compact the chain further into the 30nm fiber</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Parts of a Chromosome</h4>
       <div style="margin:10px 0; padding:16px; border:1px solid var(--line); border-radius:10px; background:#fff; overflow-x:auto;">
         <div style="display:flex; justify-content:center; gap:24px; min-width:280px;">
           <div style="display:flex; flex-direction:column; align-items:center;">
             <div style="width:8px; height:16px; background:var(--ink-soft); border-radius:4px 4px 0 0;"></div>
             <div style="width:22px; height:70px; background:var(--teal-soft); border:2px solid var(--teal); border-radius:10px;"></div>
             <div style="width:26px; height:14px; background:var(--coral); border-radius:50%; margin:-7px 0;"></div>
             <div style="width:22px; height:70px; background:var(--teal-soft); border:2px solid var(--teal); border-radius:10px;"></div>
             <div style="width:8px; height:16px; background:var(--ink-soft); border-radius:0 0 4px 4px;"></div>
           </div>
           <div style="display:flex; flex-direction:column; align-items:center;">
             <div style="width:8px; height:16px; background:var(--ink-soft); border-radius:4px 4px 0 0;"></div>
             <div style="width:22px; height:70px; background:var(--teal-soft); border:2px solid var(--teal); border-radius:10px;"></div>
             <div style="width:26px; height:14px; background:var(--coral); border-radius:50%; margin:-7px 0;"></div>
             <div style="width:22px; height:70px; background:var(--teal-soft); border:2px solid var(--teal); border-radius:10px;"></div>
             <div style="width:8px; height:16px; background:var(--ink-soft); border-radius:0 0 4px 4px;"></div>
           </div>
         </div>
         <p style="margin:10px 0 0; font-size:11.5px; text-align:center; color:var(--ink-soft);">Two sister chromatids joined at the centromere (coral) — dark caps at each end represent the telomeres</p>
       </div>
       <ul style="margin:10px 0 0; padding-left:18px;">
         <li><strong>Chromatid:</strong> one of the two identical copies making up a duplicated chromosome, joined to its sister at the centromere</li>
         <li><strong>Centromere:</strong> the constricted region joining sister chromatids, and the site where spindle fibers attach during division</li>
         <li><strong>Kinetochore:</strong> a protein structure built on the centromere that spindle fibers physically latch onto</li>
         <li><strong>p arm:</strong> the shorter arm of a chromosome (from French <em>petit</em>, meaning small)</li>
         <li><strong>q arm:</strong> the longer arm of a chromosome (simply the letter after "p")</li>
         <li><strong>Telomere:</strong> the protective cap of repetitive DNA sequences found at each end of a chromosome</li>
         <li><strong>Satellite:</strong> a small DNA segment attached to the short arm of certain chromosomes by a thin thread called a secondary constriction</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Telomeres — Protecting the Ends</h4>
       <p style="margin:0 0 8px;">Telomeres are made of short, repeated DNA sequences (in humans, the sequence TTAGGG repeated thousands of times) that cap each end of a chromosome, protecting it from damage, from sticking to other chromosomes, and from being mistaken by the cell's repair machinery for a broken DNA end.</p>
       <p style="margin:0;">Every time a normal cell divides, its telomeres get slightly shorter, due to a limitation in how DNA replication works at the very ends of a strand (the "end-replication problem"). Once telomeres become too short, the cell can no longer divide safely and enters a resting state called senescence — one reason telomere length is closely linked to cellular aging. A special enzyme called <strong>telomerase</strong> can rebuild telomeres, and it's normally active in reproductive and stem cells, but usually switched off in most adult body cells.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Heterochromatin vs Euchromatin</h4>
       <table style="width:100%; border-collapse:collapse; margin:0; font-size:13px;">
         <thead>
           <tr style="background:var(--teal-soft);">
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Feature</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Heterochromatin</th>
             <th style="text-align:left; padding:8px 10px; border:1px solid var(--line);">Euchromatin</th>
           </tr>
         </thead>
         <tbody>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Packing</td><td style="padding:8px 10px; border:1px solid var(--line);">Tightly packed</td><td style="padding:8px 10px; border:1px solid var(--line);">Loosely packed</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Gene activity</td><td style="padding:8px 10px; border:1px solid var(--line);">Mostly transcriptionally inactive</td><td style="padding:8px 10px; border:1px solid var(--line);">Actively transcribed</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Staining</td><td style="padding:8px 10px; border:1px solid var(--line);">Stains darker</td><td style="padding:8px 10px; border:1px solid var(--line);">Stains lighter</td></tr>
           <tr><td style="padding:8px 10px; border:1px solid var(--line);">Location in nucleus</td><td style="padding:8px 10px; border:1px solid var(--line);">Usually near the nuclear envelope</td><td style="padding:8px 10px; border:1px solid var(--line);">More central in the nucleus</td></tr>
         </tbody>
       </table>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Importance &amp; Applications</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Biotechnology application:</strong> chromosome banding techniques (like G-banding, which produces a characteristic dark-and-light striped pattern) allow scientists to identify each individual chromosome and detect structural abnormalities</li>
         <li><strong>Medical applications:</strong> karyotyping (arranging all 46 human chromosomes by size and banding pattern) is used to detect numerical or structural chromosomal disorders</li>
         <li><strong>Industrial/research applications:</strong> understanding chromatin packing is essential for CRISPR-based gene editing, since tightly packed heterochromatin can block editing tools from accessing the DNA</li>
       </ul>
       <div style="margin:10px 0 0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Clinical Point</span>
         <p style="margin:6px 0 0; font-size:14px;">Cancer cells frequently reactivate telomerase, allowing them to divide indefinitely without their telomeres shortening to a critical length — this is one reason telomerase is an active target for anticancer drug research.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Advantages &amp; Limitations of This Packaging System</h4>
       <p style="margin:0 0 8px;"><strong>Advantages:</strong> multi-level folding lets an enormous amount of DNA fit safely inside a tiny nucleus, while still allowing specific regions to be selectively unpacked for reading (euchromatin) or safely locked away (heterochromatin) as needed.</p>
       <p style="margin:0;"><strong>Limitations:</strong> this packaging is not indestructible — errors in maintaining chromatin structure, telomere shortening, or centromere malfunction can all lead to genetic instability, faulty cell division, or disease.</p>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Modern Developments &amp; Interesting Facts</h4>
       <p style="margin:0 0 8px;">The study of how chromatin packing itself (without changing the underlying DNA sequence) affects gene activity has grown into its own major field called <strong>epigenetics</strong>. Chemical tags added to histones or DNA can switch genes on or off by changing how tightly a region is packed — meaning your chromatin structure, not just your DNA sequence, actively shapes which genes get used in each cell type.</p>
       <div style="margin:0; padding:12px 14px; background:var(--teal-soft); border-left:4px solid var(--teal); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--teal-deep); font-weight:600;">Interesting Fact</span>
         <p style="margin:6px 0 0; font-size:14px;">If you connected the DNA from all the cells in a single human body end to end, the total length would stretch roughly twice the diameter of the solar system — a genuinely staggering amount of packaging happening inside you right now.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 8px;">Common Mistakes Students Make</h4>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Confusing "chromatin" and "chromosome" — chromatin is the general term for DNA plus its packaging proteins in any state; "chromosome" usually refers to the highly condensed form seen during cell division</li>
         <li>Thinking the centromere is always in the exact middle of a chromosome — its position varies and is actually used to classify chromosome types (covered in the next topic)</li>
         <li>Assuming telomeres code for genes — they don't; they are non-coding, repetitive protective sequences</li>
         <li>Mixing up heterochromatin (tightly packed, less active) with euchromatin (loosely packed, more active) — remember "hetero" sounds "heavy," while "eu" (as in "euphoria") suggests open and active</li>
       </ul>
       <div style="margin:0; padding:12px 14px; background:var(--panel); border:1px dashed var(--line); border-radius:8px;">
         <span style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-soft); font-weight:600;">Memory Trick</span>
         <p style="margin:6px 0 0; font-size:14px;">Remember the packaging order with "D-N-C-L-C": <strong>D</strong>NA → <strong>N</strong>ucleosome → <strong>C</strong>hromatin fiber (30nm) → <strong>L</strong>ooped domains → <strong>C</strong>hromosome.</p>
       </div>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Summary &amp; Key Points</h4>
       <ul style="margin:0; padding-left:18px;">
         <li>Chromosomes were first observed by Flemming (1882); the term was coined by Waldeyer (1888)</li>
         <li>DNA is packaged in stages: double helix → nucleosome → 30nm chromatin fiber → looped domains → condensed chromosome</li>
         <li>A nucleosome consists of DNA wrapped around a core of 8 histone proteins (2 each of H2A, H2B, H3, H4), with linker histone H1 assisting further compaction</li>
         <li>Key chromosome parts include the centromere, kinetochore, p and q arms, telomeres, and (in some chromosomes) a satellite</li>
         <li>Telomeres protect chromosome ends and shorten with each cell division; telomerase can rebuild them</li>
         <li>Heterochromatin is tightly packed and mostly inactive; euchromatin is loosely packed and actively transcribed</li>
         <li>Chromatin packing state is central to epigenetics — gene activity can change without any change to the DNA sequence itself</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Glossary</h4>
       <ul style="margin:0; padding-left:18px;">
         <li><strong>Chromatin:</strong> the complex of DNA and histone proteins that makes up chromosomes</li>
         <li><strong>Histone:</strong> a protein around which DNA winds to form a nucleosome</li>
         <li><strong>Nucleosome:</strong> the basic repeating unit of chromatin — DNA wrapped around a histone octamer</li>
         <li><strong>Centromere:</strong> the constricted chromosome region joining sister chromatids and anchoring the kinetochore</li>
         <li><strong>Telomere:</strong> a repetitive protective DNA sequence capping each end of a chromosome</li>
         <li><strong>Telomerase:</strong> an enzyme that rebuilds telomere length</li>
         <li><strong>Karyotype:</strong> a complete, organized visual profile of an individual's chromosomes</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Viva Questions</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>Who discovered chromosomes, and who named them?</li>
         <li>List the levels of DNA packaging in order, from double helix to condensed chromosome.</li>
         <li>What is a nucleosome made of?</li>
         <li>Differentiate between the centromere and the kinetochore.</li>
         <li>Why do telomeres shorten with each cell division?</li>
         <li>Differentiate between heterochromatin and euchromatin.</li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Previous Year University Questions</h4>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Long answer (10 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Describe the levels of DNA packaging in a eukaryotic chromosome, from double helix to metaphase chromosome.</li>
         <li>Describe the structure of a nucleosome and its role in chromatin organization.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Short answer (5 marks)</p>
       <ul style="margin:0 0 10px; padding-left:18px;">
         <li>Write a short note on telomeres and telomerase.</li>
         <li>Differentiate between heterochromatin and euchromatin.</li>
       </ul>
       <p style="margin:0 0 6px; font-weight:600; font-size:13.5px;">Very short answer (2 marks)</p>
       <ul style="margin:0; padding-left:18px;">
         <li>Define centromere.</li>
         <li>What is a karyotype?</li>
       </ul>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Practice MCQs</h4>
       <ol style="margin:0; padding-left:18px;">
         <li>The term "chromosome" was coined by: <strong>(a)</strong> Flemming <strong>(b)</strong> Waldeyer <strong>(c)</strong> Mendel <strong>(d)</strong> Morgan <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>A nucleosome's histone core is made of how many histone proteins? <strong>(a)</strong> 2 <strong>(b)</strong> 4 <strong>(c)</strong> 6 <strong>(d)</strong> 8 <br><em style="color:var(--teal);">Answer: (d)</em></li>
         <li>The linker histone that assists further chromatin compaction is: <strong>(a)</strong> H1 <strong>(b)</strong> H2A <strong>(c)</strong> H3 <strong>(d)</strong> H4 <br><em style="color:var(--teal);">Answer: (a)</em></li>
         <li>Spindle fibers attach to a chromosome at the: <strong>(a)</strong> Telomere <strong>(b)</strong> Satellite <strong>(c)</strong> Kinetochore <strong>(d)</strong> p arm <br><em style="color:var(--teal);">Answer: (c)</em></li>
         <li>Telomeres in humans are made of repeats of the sequence: <strong>(a)</strong> AATT <strong>(b)</strong> TTAGGG <strong>(c)</strong> GCGC <strong>(d)</strong> ATGC <br><em style="color:var(--teal);">Answer: (b)</em></li>
         <li>Which form of chromatin is more transcriptionally active? <strong>(a)</strong> Heterochromatin <strong>(b)</strong> Euchromatin <strong>(c)</strong> Both equally <strong>(d)</strong> Neither <br><em style="color:var(--teal);">Answer: (b)</em></li>
       </ol>`,

      `<h4 style="color:var(--teal-deep); font-size:15px; margin:0 0 10px;">Frequently Asked Questions</h4>
       <p style="margin:0 0 8px;"><strong>Q: Is chromatin present all the time, or only during cell division?</strong><br>Chromatin is present at all times — it simply exists in a more relaxed, extended form during most of the cell's life and becomes highly condensed into the classic chromosome shape only just before and during division.</p>
       <p style="margin:0 0 8px;"><strong>Q: Do all chromosomes have a satellite?</strong><br>No — only certain chromosomes (in humans, specific acrocentric chromosomes) carry a satellite region attached by a secondary constriction; most chromosomes don't have one.</p>
       <p style="margin:0;"><strong>Q: Why is telomerase mostly inactive in adult body cells?</strong><br>Keeping telomerase switched off in most adult cells is thought to be a natural safeguard against uncontrolled cell division — one reason reactivating telomerase is strongly associated with cancer.</p>`,

    ] },
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
