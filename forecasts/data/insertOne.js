db.forcasts.insertOne({
    _id: 1,
    title: "123 Department Report",
    tags: [ "G", "STLW" ],
    year: 2014,
    subsections: [
      {
        subtitle: "Section 1: Overview",
        tags: [ "SI", "G" ],
        content:  "Section 1: This is the content of section 1."
      },
      {
        subtitle: "Section 2: Analysis",
        tags: [ "STLW" ],
        content: "Section 2: This is the content of section 2."
      },
      {
        subtitle: "Section 3: Budgeting",
        tags: [ "TK" ],
        content: {
          text: "Section 3: This is the content of section3.",
          tags: [ "HCS" ]
        }
      }
    ]
  });