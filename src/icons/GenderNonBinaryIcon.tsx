import React, { FC, memo } from 'react';
import GenderNonBinarySvg from '../svg/gender-non-binary.svg';

export interface IGenderNonBinaryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GenderNonBinaryIcon: FC<IGenderNonBinaryIconProps> = memo(props => {
  return <GenderNonBinarySvg {...props} />;
});
