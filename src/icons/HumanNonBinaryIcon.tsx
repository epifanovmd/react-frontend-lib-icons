import React, { FC, memo } from 'react';
import HumanNonBinarySvg from '../svg/human-non-binary.svg';

export interface IHumanNonBinaryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanNonBinaryIcon: FC<IHumanNonBinaryIconProps> = memo(props => {
  return <HumanNonBinarySvg {...props} />;
});
