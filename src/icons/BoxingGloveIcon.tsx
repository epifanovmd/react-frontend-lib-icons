import React, { FC, memo } from 'react';
import BoxingGloveSvg from '../svg/boxing-glove.svg';

export interface IBoxingGloveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoxingGloveIcon: FC<IBoxingGloveIconProps> = memo(props => {
  return <BoxingGloveSvg {...props} />;
});
