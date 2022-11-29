import React, { FC, memo } from 'react';
import NecklaceSvg from '../svg/necklace.svg';

export interface INecklaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NecklaceIcon: FC<INecklaceIconProps> = memo(props => {
  return <NecklaceSvg {...props} />;
});
