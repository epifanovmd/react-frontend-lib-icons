import React, { FC, memo } from 'react';
import EmoticonCryOutlineSvg from '../svg/emoticon-cry-outline.svg';

export interface IEmoticonCryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonCryOutlineIcon: FC<IEmoticonCryOutlineIconProps> = memo(props => {
  return <EmoticonCryOutlineSvg {...props} />;
});
