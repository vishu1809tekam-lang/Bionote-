/* ==========================================================================
   BioNotes — Shared content data
   This is the single source of truth for Notes, MCQs, Practicals and Papers.
   Every page-specific script (notes.js, mcqs.js, practicals.js, papers.js,
   search.js) reads from these arrays. Edit content here, not in the HTML.
   ========================================================================== */

const NOTES = [
  { tag:'Unit 01', title:'Cell Biology', desc:'Structure and function of prokaryotic and eukaryotic cells, from membranes to programmed cell death.',
    topics:[
      'Cell theory and classification of prokaryotic vs eukaryotic cells',
      'Plasma membrane structure — fluid mosaic model and transport mechanisms',
      'Cell organelles — nucleus, mitochondria, endoplasmic reticulum, Golgi apparatus, lysosomes',
      'Cytoskeleton — microfilaments, microtubules, and intermediate filaments',
      'Cell cycle phases — G1, S, G2, and mitosis',
      'Cell division — mitosis and meiosis, and their biological significance',
      'Cell signaling — receptors, second messengers, and signal transduction pathways',
      'Cell junctions — tight junctions, desmosomes, and gap junctions',
      'Stem cells — types, properties, and potency (totipotent to unipotent)',
      'Apoptosis and necrosis — mechanisms of programmed and accidental cell death'
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
