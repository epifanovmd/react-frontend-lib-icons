import React, { FC, memo } from 'react';
import EmoticonDeadOutlineSvg from '../svg/emoticon-dead-outline.svg';

export interface IEmoticonDeadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonDeadOutlineIcon: FC<IEmoticonDeadOutlineIconProps> = memo(props => {
  return <EmoticonDeadOutlineSvg {...props} />;
});
