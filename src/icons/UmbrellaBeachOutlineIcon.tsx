import React, { FC, memo } from 'react';
import UmbrellaBeachOutlineSvg from '../svg/umbrella-beach-outline.svg';

export interface IUmbrellaBeachOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbrellaBeachOutlineIcon: FC<IUmbrellaBeachOutlineIconProps> = memo(props => {
  return <UmbrellaBeachOutlineSvg {...props} />;
});
