import { Button } from "rebass"
import { DarkCard } from "components/Card"
import Modal from "components/Modal"
import { PairSearch } from "./PairSearch"
import { TYPE } from "theme"
import { X } from "react-feather"
import {darken} from 'polished'
import styled from "styled-components/macro"
type ChartSearchModalProps = {
    isOpen: boolean;
    onDismiss: () => void
}

const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #444;
    font-size:18px;
`

const Close = styled(X)`
    color: #fff;
    cursor:pointer;
    &:hover {
        color: ${darken(0.2, '#fff')};
        transition: ease all 0.1s;
    }
`

export const ChartSearchModal = (props: ChartSearchModalProps) => {
    const { isOpen, onDismiss } = props
    const onPairSelect = (pair: any) => onDismiss()
    return (
        <Modal isOpen={isOpen} onDismiss={onDismiss}>
            <DarkCard>
                <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: 'center' }}>
                    <Close size={25} onClick={onDismiss} />
                </div>
                <PairSearch onPairSelect={onPairSelect} />
            </DarkCard>
        </Modal>
    )
}