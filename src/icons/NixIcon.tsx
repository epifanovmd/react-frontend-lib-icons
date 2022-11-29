import React, { FC, memo } from 'react';
import NixSvg from '../svg/nix.svg';

export interface INixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NixIcon: FC<INixIconProps> = memo(props => {
  return <NixSvg {...props} />;
});
