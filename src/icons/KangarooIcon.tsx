import React, { FC, memo } from 'react';
import KangarooSvg from '../svg/kangaroo.svg';

export interface IKangarooIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KangarooIcon: FC<IKangarooIconProps> = memo(props => {
  return <KangarooSvg {...props} />;
});
