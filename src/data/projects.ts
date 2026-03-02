// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  deployUrl?: string;
  category: 'Data Engineering' | 'Fullstack' | 'Infrastructure';
}

export const projects: Project[] = [
  {
    title: "Pipeline de ETL de Alta Performance",
    description: "Desenvolvimento de um motor de integração de dados utilizando Node.js e TypeScript, focado na ingestão e transformação de grandes volumes de dados relacionais para ambientes analíticos.",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    category: "Data Engineering",
    githubUrl: "https://github.com/seu-usuario/projeto-etl",
  },
  {
    title: "Infraestrutura Scale-Out com Terraform",
    description: "Provisionamento automatizado de recursos na GCP/AWS utilizando IaC, garantindo ambientes de staging e produção idênticos e escaláveis.",
    techStack: ["Terraform", "GCP", "AWS", "GitHub Actions"],
    category: "Infrastructure",
    deployUrl: "https://seu-projeto.com",
  },
  {
    title: "API Gateway & Microserviços",
    description: "Arquitetura orientada a eventos utilizando RabbitMQ e NestJS, com foco em resiliência e baixa latência entre serviços.",
    techStack: ["NestJS", "RabbitMQ", "Redis", "Ocelot"],
    category: "Fullstack",
    githubUrl: "https://github.com/seu-usuario/microservices-arch",
  }
];