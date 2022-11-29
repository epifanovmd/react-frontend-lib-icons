import React, { FC, memo } from 'react';
import PurseOutlineSvg from '../svg/purse-outline.svg';

export interface IPurseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PurseOutlineIcon: FC<IPurseOutlineIconProps> = memo(props => {
  return <PurseOutlineSvg {...props} />;
});
