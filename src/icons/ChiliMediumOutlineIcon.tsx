import React, { FC, memo } from 'react';
import ChiliMediumOutlineSvg from '../svg/chili-medium-outline.svg';

export interface IChiliMediumOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliMediumOutlineIcon: FC<IChiliMediumOutlineIconProps> = memo(props => {
  return <ChiliMediumOutlineSvg {...props} />;
});
