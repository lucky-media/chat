import { ModelProviderCard } from '@/types/llm';

const Ollama: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Gemma 7B',
      functionCall: false,
      id: 'gemma',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Gemma 2B',
      functionCall: false,
      id: 'gemma:2b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 Chat 13B',
      functionCall: false,
      hidden: true,
      id: 'llama2:13b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 Chat 7B',
      functionCall: false,
      id: 'llama2',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 Chat 70B',
      functionCall: false,
      hidden: true,
      id: 'llama2:70b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 CN 13B',
      functionCall: false,
      hidden: true,
      id: 'llama2-chinese:13b',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Llama2 CN 7B',
      functionCall: false,
      id: 'llama2-chinese',
      tokens: 4000,
      vision: false,
    },
    {
      displayName: 'Code Llama 7B',
      functionCall: false,
      id: 'codellama',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Code Llama 34B',
      functionCall: false,
      hidden: true,
      id: 'codellama:34b',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Code Llama 70B',
      functionCall: false,
      hidden: true,
      id: 'codellama:70b',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Code Llama 7B (Python)',
      functionCall: false,
      hidden: true,
      id: 'codellama:python',
      tokens: 16_000,
      vision: false,
    },
    {
      displayName: 'Mistral',
      functionCall: false,
      id: 'mistral',
      tokens: 4800,
      vision: false,
    },
    {
      displayName: 'Mixtral 8x7B',
      functionCall: false,
      id: 'mixtral',
      tokens: 32_000,
      vision: false,
    },
    {
      displayName: 'Qwen Chat 4B',
      functionCall: false,
      id: 'qwen',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'Qwen Chat 7B',
      functionCall: false,
      id: 'qwen:7b',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'Qwen Chat 14B',
      functionCall: false,
      hidden: true,
      id: 'qwen:14b',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'Qwen Chat 72B',
      functionCall: false,
      hidden: true,
      id: 'qwen:72b',
      tokens: 32_768,
      vision: false,
    },
    {
      displayName: 'LLaVA 7B',
      functionCall: false,
      hidden: true,
      id: 'llava',
      tokens: 4000,
      vision: true,
    },
    {
      displayName: 'LLaVA 13B',
      functionCall: false,
      hidden: true,
      id: 'llava:13b',
      tokens: 4000,
      vision: true,
    },
    {
      displayName: 'LLaVA 34B',
      functionCall: false,
      hidden: true,
      id: 'llava:34b',
      tokens: 4000,
      vision: true,
    },
    // TODO: 在单独支持千问之后这些 Qwen 模型需要移动到千问的配置中
    {
      displayName: 'Qwen Plus',
      functionCall: true,
      hidden: true,
      id: 'qwen-plus',
      tokens: 30_000,
      vision: false,
    },
    {
      displayName: 'Qwen Turbo',
      functionCall: true,
      hidden: true,
      id: 'qwen-turbo',
      tokens: 6000,
      vision: false,
    },
    {
      displayName: 'Qwen Max',
      functionCall: true,
      hidden: true,
      id: 'qwen-max',
      tokens: 6000,
      vision: false,
    },
    {
      displayName: 'Qwen Max Long',
      functionCall: true,
      hidden: true,
      id: 'qwen-max-longcontext',
      tokens: 28_000,
      vision: false,
    },
    {
      displayName: 'Qwen VL Max',
      functionCall: false,
      hidden: true,
      id: 'qwen-vl-max',
      tokens: 6000,
      vision: true,
    },
    {
      displayName: 'Qwen VL Plus',
      functionCall: false,
      hidden: true,
      id: 'qwen-vl-plus',
      tokens: 30_000,
      vision: true,
    },
  ],
  id: 'ollama',
};

export default Ollama;
