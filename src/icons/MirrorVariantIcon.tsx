import React, { FC, memo } from 'react';
import MirrorVariantSvg from '../svg/mirror-variant.svg';

export interface IMirrorVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MirrorVariantIcon: FC<IMirrorVariantIconProps> = memo(props => {
  return <MirrorVariantSvg {...props} />;
});
