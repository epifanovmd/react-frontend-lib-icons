import React, { FC, memo } from 'react';
import CodeTagsCheckSvg from '../svg/code-tags-check.svg';

export interface ICodeTagsCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeTagsCheckIcon: FC<ICodeTagsCheckIconProps> = memo(props => {
  return <CodeTagsCheckSvg {...props} />;
});
