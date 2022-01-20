import { useClipboard } from 'use-clipboard-copy';
import { BsHandThumbsUpFill } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";

type ClipboardCodeProps = {
    fixedBtn?: boolean;
}

const ClipboardCode = (props: React.PropsWithChildren<ClipboardCodeProps>) => {
    const clipboard = useClipboard({ copiedTimeout: 1000 });

    // Style
    const preClasses = props.fixedBtn ? 'clipboardcode-fixed-pre' : 'py-4';
    const btnClasses = props.fixedBtn ? 'clipboardcode-fixed-btn' : 'clipboardcode-default-btn';

    return (
        <div className="relative group">
            <pre className={preClasses}>
                <code ref={clipboard.target}>
                    {props.children}
                </code>
            </pre>

            <button className={`clipboardcode-btn ${btnClasses} text-white`} onClick={() => clipboard.copy(props.children)}>
                {/* Copy Icon */}
                {clipboard.copied ? (<BsHandThumbsUpFill/>) : (<BiCopy/>)}
            </button>
        </div>
    )
}

export default ClipboardCode;