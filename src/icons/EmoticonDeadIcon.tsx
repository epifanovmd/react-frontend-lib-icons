import React, { FC, memo } from 'react';
import EmoticonDeadSvg from '../svg/emoticon-dead.svg';

export interface IEmoticonDeadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonDeadIcon: FC<IEmoticonDeadIconProps> = memo(props => {
  return <EmoticonDeadSvg {...props} />;
});
