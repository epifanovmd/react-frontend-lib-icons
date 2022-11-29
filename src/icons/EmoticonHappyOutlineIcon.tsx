import React, { FC, memo } from 'react';
import EmoticonHappyOutlineSvg from '../svg/emoticon-happy-outline.svg';

export interface IEmoticonHappyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonHappyOutlineIcon: FC<IEmoticonHappyOutlineIconProps> = memo(props => {
  return <EmoticonHappyOutlineSvg {...props} />;
});
