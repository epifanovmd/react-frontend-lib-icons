import React, { FC, memo } from 'react';
import ChiliHotOutlineSvg from '../svg/chili-hot-outline.svg';

export interface IChiliHotOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliHotOutlineIcon: FC<IChiliHotOutlineIconProps> = memo(props => {
  return <ChiliHotOutlineSvg {...props} />;
});
