import React, { FC, memo } from 'react';
import ExpandAllSvg from '../svg/expand-all.svg';

export interface IExpandAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExpandAllIcon: FC<IExpandAllIconProps> = memo(props => {
  return <ExpandAllSvg {...props} />;
});
