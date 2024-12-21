import { SSR, EffectComposer, Bloom, ToneMapping, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export function PostProcessing() {
  return (
    <EffectComposer>
      {/* <ToneMapping
        adaptive={true}
        resolution={256}
        middleGrey={0.6}
        maxLuminance={16.0}
        averageLuminance={1.0}
        adaptationRate={1.0}
      /> */}
      <ChromaticAberration
        offset={[0.002, 0.002]}
        blendFunction={BlendFunction.NORMAL}
        opacity={0.3}
      />
      <SSR
        intensity={1.4}
        exponent={1}
        distance={10}
        fade={10}
        roughnessFade={1}
        thickness={10}
        ior={0.45}
        maxRoughness={1}
        maxDepthDifference={1}
        blend={0.95}
        correction={1}
        correctionRadius={1}
        blur={0}
        blurKernel={1}
        blurSharpness={10}
        jitter={0.0}
        jitterRoughness={0.2}
        steps={10}
        refineSteps={5}
        missedRays={true}
        useNormalMap={true}
        useRoughnessMap={true}
        resolutionScale={1}
        velocityResolutionScale={1}
      />
      <Bloom
        intensity={0.45}
        luminanceThreshold={0.8}
        luminanceSmoothing={0.3}
        blendFunction={BlendFunction.ADD}
      />
    </EffectComposer>
  );
}