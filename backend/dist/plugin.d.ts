import type { Plugin } from '@elizaos/core';
import { type IAgentRuntime, Service } from '@elizaos/core';
export declare class StarterService extends Service {
    static serviceType: string;
    capabilityDescription: string;
    constructor(runtime: IAgentRuntime);
    static start(runtime: IAgentRuntime): Promise<StarterService>;
    static stop(runtime: IAgentRuntime): Promise<void>;
    stop(): Promise<void>;
}
declare const plugin: Plugin;
export default plugin;
//# sourceMappingURL=plugin.d.ts.map