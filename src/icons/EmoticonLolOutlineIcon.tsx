import React, { FC, memo } from 'react';
import EmoticonLolOutlineSvg from '../svg/emoticon-lol-outline.svg';

export interface IEmoticonLolOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonLolOutlineIcon: FC<IEmoticonLolOutlineIconProps> = memo(props => {
  return <EmoticonLolOutlineSvg {...props} />;
});
